import dragScript from "./drag.js";
import backScript from "./back.js";

function main() {
  document.querySelector(".add-obj-btn").addEventListener("click", () => {
    dragScript();
    backScript();
  });
}

main();
