function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".poem-input");
  let apiKey = "16bfc20460o66fe0f260tfe95532783a";
  let prompt = `generate a poem about ${instructionsInput.value}`;
  let context =
    "you are a poem expert. please write a four line poem in basic HTML format. seperate each line with <br/>. please remove ```html.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
