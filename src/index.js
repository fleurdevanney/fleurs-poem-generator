function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".poem-input");
  let apiKey = "16bfc20460o66fe0f260tfe95532783a";
  let prompt = `generate a poem about ${instructionsInput.value}`;
  let context =
    "you are a poem expert. please generate a four line poem, each line starting on a new line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
