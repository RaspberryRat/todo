export { section }

const section = document.createElement('section');

import pizzaMainImg from "./images/pizza-main.jpg";
const mainImg = document.createElement("img");
mainImg.src = pizzaMainImg;
section.appendChild(mainImg);

const introDiv = document.createElement('div');
section.appendChild(introDiv);
const introPara = document.createElement('p');
introPara.innerText = "Welcome to Peter's Pizza Palace where there is always a pizza party in our mouthes.";
const secondPara = document.createElement('p');
secondPara.innerHTML = "Check out our homemade pizzas made with the finiest selection of mozzarella cheeses and local ingredients. I guarantee you won't be disappointed because of our satisfication guarantee.";
introDiv.appendChild(introPara);
introDiv.appendChild(secondPara);
