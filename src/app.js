/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = randomExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let randomExcuse = () => {
  let who = ["My neighbor", "Santan", "My cats", "My twin"];
  let action = ["swallowed", "stepped on", "took", "vomited on"];
  let what = ["my face", "my laptop", "my housekeys", "my eyes"];
  let when = [
    "while I was on my way",
    "after I spoke with you",
    "when I got off the shower",
    "after I opened the oven",
    "while I was enjoying a facemask"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
