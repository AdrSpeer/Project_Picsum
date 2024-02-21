const input = document.querySelector(".input");

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Schleife
    data.forEach((allItems) => {
      //  Div erstellen
      let divBox = document.createElement("div");
      input.appendChild(divBox);
      //   IMG erstellen
      let getPic = document.createElement("img");
      getPic.setAttribute("src", allItems.download_url);
      console.log(getPic);
      divBox.appendChild(getPic);
      //   h5 ertellen
      let getAuthor = document.createElement("h5");
      getAuthor.textContent = allItems.author;
      divBox.appendChild(getAuthor);
      // Button ertellen
      let btn = document.createElement("button");
      btn.textContent = "See More";
      divBox.appendChild(btn);
      //   Eventlistener für Button
      btn.addEventListener("click", () => {
        window.open(allItems.url, "_blank");
      });
    });
  })
  //   Errorhandling
  .catch(console.error("Fehler beim Fetchen von Data", error));
