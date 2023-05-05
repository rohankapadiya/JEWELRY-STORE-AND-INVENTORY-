/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Rohan Sureshbhai Kapadiya
 *      Student ID: 149427205
 *      Date:       25/07/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

const wrappers = document.querySelector(".wrappers");
const menuDisplay = document.querySelector("#menu");

function catGenerator() {
  //This will generate the category dynamically based on js data.
  const category = categories
    .map(function (e) {
      return `<button data-id="${e.name}" type="button" class="buttons" >${e.name}</button>`;
    })
    .join("");

  menuDisplay.innerHTML = category;
}

window.addEventListener("DOMContentLoaded", function () {
  // Category of product set to its default value of Diamond(#c1)
  document.getElementById("selected-category").textContent = "Diamond";

  wrapperDisplay(
    products.filter(function () {
      return "c1";
    })
  );

  catMenuButtons();
});

function wrapperDisplay(e) {
  //Generate and Display all of the items in form of cards.

  let listAllProducts;

  listAllProducts = e.map(function (items) {
    return wrapperCardGen(items);
  });

  listAllProducts = listAllProducts.join("");

  wrappers.innerHTML = listAllProducts;
}

function wrapperCardGen(e) {
  //This will return the content of the card
  return `<div class="wrapperProduct">

    <img src="${e.imageUrl}" alt="Product Card Image">
    <div class="wrapperProduct-info">
    <h3>${e.title}</h3>
    <p class="wrapperProduct-text">${e.description}</p>
    <p class="wrapperProduct-price">$ ${e.price}</p>
    </div>

  </div>`;
}

function catMenuButtons() {
  catGenerator();

  const buttons = document.querySelectorAll(".buttons");

  buttons.forEach(function (e) {
    e.addEventListener("click", function (clickCat) {
      let selectedCategory = clickCat.currentTarget.dataset.id;

      document.getElementById("selected-category").textContent = clickCat.currentTarget.dataset.id;

      if (selectedCategory === "Diamond") {
        selectedCategory = "c1";
      } else if (selectedCategory === "Gold") {
        selectedCategory = "c2";
      } else if (selectedCategory === "Silver") {
        selectedCategory = "c3";
      } else if (selectedCategory === "RoseGold") {
        selectedCategory = "c4";
      }

      const cats = products.filter(function (product) {
        if (product.categories.includes(selectedCategory)) {
          return product;
        }
      });

      wrapperDisplay(cats);
    });
  });
}
// var tBody = document.getElementById("category-products");
// var sel_prods = document.getElementById("category-products");
// var sel_cat = document.getElementById("selected-category");
// var menu = document.getElementById("menu");
// var n_Row, n_Cell, n_Data;
// var cat1 = [],
//   cat2 = [],
//   cat3 = [],
//   cat4 = [];
// var cat1_title = [],
//   cat1_price = [];
// var cat2_title = [],
//   cat2_price = [];
// var cat3_title = [],
//   cat3_price = [];
// var cat4_title = [],
//   cat4_price = [];

// for (let i = 0; i < categories.length; i++) {
//   let appendbtn = document.createElement("button");
//   appendbtn.textContent = categories[i].name;
//   appendbtn.id = categories[i].name;
//   menu.appendChild(appendbtn);
// }

// var btns = document.querySelector("#menu").querySelectorAll("button");

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     sel_cat.innerHTML = btns[i].textContent;
//     displayFunction(btns[i].textContent);
//   });
// }
// sel_cat.textContent = "Diamond";
// fillData("c1");

// for (let i = 0; i < products.length; i++) {
//   products[i].categories.forEach(function (e) {
//     if (e === "c1") {
//       if (products[i].discontinued === false) cat1_title.push(products[i].title);
//       cat1.push(products[i].description);
//       cat1_price.push(products[i].price);
//     } else if (e === "c2") {
//       if (products[i].discontinued === false) cat2_title.push(products[i].title);
//       cat2.push(products[i].description);
//       cat2_price.push(products[i].price);
//     } else if (e === "c3") {
//       if (products[i].discontinued === false) cat3_title.push(products[i].title);
//       cat3.push(products[i].description);
//       cat3_price.push(products[i].price);
//     } else if (e === "c4") {
//       if (products[i].discontinued === false) cat4_title.push(products[i].title);
//       cat4.push(products[i].description);
//       cat4_price.push(products[i].price);
//     }
//   });
// }

// function consoleTextDisplay(e) {
//   let new_Rows = document.getElementsByClassName("selected_Row");
//   if (e === "c1") {
//     for (let i = 0; i < cat1.length; i++) {
//       new_Rows[i].addEventListener("click", function () {
//         console.log("Title:", cat1_title[i]);
//         console.log("Description:", cat1[i]);
//         console.log("Price:", cat1_price[i]);
//       });
//     }
//   } else if (e === "c2") {
//     for (let i = 0; i < cat2.length; i++) {
//       new_Rows[i].addEventListener("click", function () {
//         console.log("Title:", cat2_title[i]);
//         console.log("Description:", cat2[i]);
//         console.log("Price:", cat2_price[i]);
//       });
//     }
//   } else if (e === "c3") {
//     for (let i = 0; i < cat3.length; i++) {
//       new_Rows[i].addEventListener("click", function () {
//         console.log("Title:", cat3_title[i]);
//         console.log("Description:", cat3[i]);
//         console.log("Price:", cat3_price[i]);
//       });
//     }
//   } else if (e === "c4") {
//     for (let i = 0; i < cat4.length; i++) {
//       new_Rows[i].addEventListener("click", function () {
//         console.log("Title:", cat4_title[i]);
//         console.log("Description:", cat4[i]);
//         console.log("Price:", cat4_price[i]);
//       });
//     }
//   }
// }

// function fillData(e) {
//   for (let i = 0; i < products.length; i++) {
//     document.createElement("tr");

//     products[i].categories.forEach(function (cat) {
//       if (cat === e) {
//         if (products[i].discontinued === false) {
//           n_Row = tBody.insertRow();
//           n_Row.className = "selected_Row";
//           n_Cell = n_Row.insertCell();
//           n_Data = document.createTextNode(products[i].title);
//           n_Cell.appendChild(n_Data);
//           n_Cell = n_Row.insertCell();
//           n_Cell.id = i;
//           n_Data = document.createTextNode(products[i].description);
//           n_Cell.appendChild(n_Data);
//           n_Cell = n_Row.insertCell();
//           n_Data = document.createTextNode(
//             products[i].price.toLocaleString("en-CA", { style: "currency", currency: "CAD" })
//           );
//           n_Cell.appendChild(n_Data);
//         }
//       }
//     });
//   }
// }

// function displayFunction(e) {
//   sel_prods.innerHTML = "";

//   for (let i = 0; i < categories.length; i++) {
//     if (categories[i].name === e) {
//       e = categories[i].id;
//     }
//   }
//   fillData(e);
//   consoleTextDisplay(e);
// }

// consoleTextDisplay("c1");
