import "./styles.css"
import { section as home } from "./home.js";
import { section as about } from "./about.js"
import { section as menu } from "./menu.js"

const contentDiv = document.getElementById('content');


function showTitle() {
  const headerOne = document.createElement("h1");
  headerOne.innerText = "Peter's Pizza Palace";
  contentDiv.appendChild(headerOne);
};

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', changeTab);
});

function changeTab(event) {
  const btn = event.target;
  clearContent();
  showTitle();
  focusBtn(btn);
  loadTab(btn);
};

function loadTab(btn) {
  if (btn.classList.contains('about-btn')) {
    contentDiv.appendChild(about);
  } else if (btn.classList.contains('menu-btn')) {
    contentDiv.appendChild(menu);
  } else if (btn.classList.contains('home-btn')) {
    contentDiv.appendChild(home);
  } else {
    console.log('No tab found');
  };
};

function clearContent() {
  const mainDiv = document.getElementById('content')
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  };
};

function focusBtn(activeBtn) {
  btns.forEach(btn => {
    btn.classList.remove('focus-btn');
  });
  activeBtn.classList.add('focus-btn');
};

// creates an empty element with the home classlist to trigger correct display on initial page load
function firstLoad() {
  showTitle();
  const btn = document.createElement('button');
  btn.classList.add('home-btn');
  loadTab(btn);
};

firstLoad();
