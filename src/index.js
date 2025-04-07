function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "You may write me down in history With your bitter, twisted lies, You may trod me in the very dirt But still, like dust, I'll rise.",
    autoStart: true,
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
