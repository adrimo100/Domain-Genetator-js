/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "first", "last"];
  let adjectives = ["great", "big", "small", "little"];
  let nouns = ["jogger", "racoon", "mombasa", "voi"];
  let extensions = [".com", ".es", ".io", ".org"];

  for (let pron of pronouns)
    for (let adj of adjectives)
      for (let noun of nouns)
        for (let ext of extensions) {
          console.log(pron + adj + noun + ext);

          document.querySelector(
            "#domains"
          ).innerHTML += `<div style = "font-weight: bold;
          "> ${pron + adj + noun + ext} </div>`;
        }
};
