export { section };

const section = document.createElement('section');
const aboutDiv = document.createElement('div');
const aboutPara = document.createElement('p');
aboutPara.innerText = 'We are the master pizza makers';
section.appendChild(aboutDiv);
aboutDiv.appendChild(aboutPara);
