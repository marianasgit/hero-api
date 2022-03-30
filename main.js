"use strict";

const pesquisarHeroi = async (heroi) => {
  const url = `https://superheroapi.com/api.php/4902109339872923/search/${heroi}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const criarCard = ({ image, biography, powerstats }) => {

//  console.log(work.base);
console.log(powerstats)

  const img = document.createElement("img");
  img.src = image.url;
  
  const bio = document.createElement("bio");
  bio.src = biography.publisher;

  const power = document.createElement("power");
  power.src = powerstats; 

  return img , bio, power;
};

const carregarImagens = async () => {
  const container = document.getElementById("imagem-container");
  const heroi = document.getElementById("heroi").value;
  const imagens = await pesquisarHeroi(heroi);
  console.log(imagens);
  const tagImagens = imagens.results.map(criarCard);
  container.replaceChildren(...tagImagens);
};

document.getElementById("pesquisar").addEventListener("click", carregarImagens);
