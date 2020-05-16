// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function createTabs(item) {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = item
    return tab;
  }
  // createTabs();
  
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .catch(err => {
        console.log('error', err)
    })
    .then(response => {
      const entryPoint = document.querySelector(".topics");
  
      response.data.topics.forEach(element => {
        entryPoint.appendChild(createTabs(element));
      });
    });