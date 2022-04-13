"use strict";

const pesquisarHeroi = async (heroi) => {
  const url = `https://superheroapi.com/api.php/4902109339872923/search/${heroi}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const criarPersonagem = ({ image, biography}) => {
  const card = document.createElement("div");

  card.innerHTML = `
    <img src="${image.url}" class="front"></img>
    <h3>Biography</h3>
    <ul>
      <li>
        <h4>Full Name:</h3>
        <span>${biography["full-name"]}</span>
      </li>
      <li>
        <h4>Alter-egos:</h3>
        ${biography["alter-egos"]}
      </li>
      <li>
        <h4>Aliases:</h3>
        ${biography.aliases}
      </li>
      <li>
        <h4>Place of Birth:</h3>
        ${biography["place-of-birth"]}
      </li>
      <li>
        <h4>First Appearance:</h3>
        ${biography["first-appearance"]}
      </li>
      <li>
        <h4>Publisher:</h3>
        ${biography.publisher}
      </li>
      <li>
        <h4>Alignment:</h3>
        ${biography.alignment}
      </li>
    </ul>
  </div>

    
  `;

  return card;
};

var swiper = new Swiper(".mySwiper", {
         slidesPerView: 1,
         spaceBetween: 30,
         loop: true,
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
         },
         navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         },
       });

const carregarPersonagens = async () => {
  const container = document.getElementById("imagem-container");

  const heroi = document.getElementById("heroi").value;

  const personagem = await pesquisarHeroi(heroi);

  console.log(personagem);

  const tagPersonagens = personagem.results.map(criarPersonagem);

  container.replaceChildren(...tagPersonagens);
};

document
  .getElementById("pesquisar")
  .addEventListener("click", carregarPersonagens);
