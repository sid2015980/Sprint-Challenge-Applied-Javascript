// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardCreator(items) {
    const card = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("span");
  
    //adding classlists
    card.classList.add("card");
    div2.classList.add("headline");
    div3.classList.add("author");
    div4.classList.add("img-container");
  
    //adding textcontext
    div2.textContent = items.headline;
    image.src = items.authorPhoto;
    name.textContent = `By: ${items.authorName}`;
  
    //appending children
    card.append(div2, div3)
    div3.append(div4, name)
    div4.append(image);
  
    return card;
  }
  
  // cardCreator();
  
  axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .catch(err => {
        console.log('error', err)
    })
    .then(response => {
      // console.log(response.data);
  
      let cardContainer = document.querySelector(".cards-container");
  
      let arrayData = Object.values(response.data.articles);
  
      arrayData.forEach(object => {
        // console.log(arrayData)
        object.forEach(article => {
          console.log(article)
          cardContainer.appendChild(cardCreator(article));
        });
      });
    });