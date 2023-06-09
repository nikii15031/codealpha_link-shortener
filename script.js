let original_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let shorten_link = document.getElementById("shorten_link");
let copy = document.getElementById("copy");

generate.addEventListener("click", () => {
  let url = original_link.value;
 fetch('https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html')
 .then((resp) => resp.json())
 .then((value) => {
   shorten_link.value = value.result.short_link;

  }) 
  .catch((error) => {
   shorten_link.value = "something went wrong!";
  });
});

