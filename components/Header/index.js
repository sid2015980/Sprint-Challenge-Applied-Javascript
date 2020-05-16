// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement("div");
    const date = document.createElement("span");
    const headerTitle = document.createElement("h1");
    const temp = document.createElement("span");
  
    //adding classlists
    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");
  
    //textcontext
    temp.textContent = "98°";
    date.textContent = new Date();
    headerTitle.textContent = "Lambda Times";
  
    //appendingchildren to the header div
    header.append(date, headerTitle, temp)
  
    return header;
  }
  document.querySelector(".header-container").appendChild(Header());
