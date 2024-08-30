export { section };

const section = document.createElement('section');
const aboutDiv = document.createElement('div');
const aboutPara = document.createElement('p');
aboutPara.innerText = 'Here is our delicious menu';
section.appendChild(aboutDiv);
aboutDiv.appendChild(aboutPara);
