import "./style.css";
import { startTimer } from "./countdown";
import { drawFlakes } from "./snow";

const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const lightsList = document.getElementById("wire");
const countdownWr = document.getElementById("countdownWr");
const deadline = new Date("December 31, 2020 23:59:59");

window.addEventListener("load", animation);
addBtn.addEventListener("click", addLight);
deleteBtn.addEventListener("click", deleteLight);

function animation() {
  countdownWr.hidden = false;
  startTimer("clock", deadline);
  setInterval(drawFlakes, 25);
}

function addLight() {
  const li = document.createElement("li");
  lightsList.append(li);
}

function deleteLight() {
  lightsList.lastElementChild.remove();
}
