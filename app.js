// main logic the website
const allProductItem = document.querySelectorAll(".pro");

allProductItem.forEach((product) => {
  product.firstChild.nextSibling.addEventListener("click", () => {
    location.href = "sproduct.html";
  });
});

/* hamburger menu functions*/

// all elements reference here
const barIcon = document.getElementById("bar");
const navMenu = document.getElementById("nav");
const closeIcon = document.getElementById("close");

// adding event listener for click event
if (barIcon) {
  barIcon.addEventListener("click", () => {
    navMenu.style.right = "0";
  });
}

if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    navMenu.style.right = "-300px";
  });
}

/* hamburger menu functions*/

/* cart page image gallery functions*/
// all reference here
const mainImg = document.getElementById("main");
const smImg = document.querySelectorAll("#small-img");

smImg.forEach((img) => {
  let imgSrc = img.src;

  img.addEventListener("click", () => {
    mainImg.src = imgSrc;
  });
});

/* cart page image gallery functions*/

/* cart icon click event listener*/
const cartIcon = document.querySelectorAll("#cart-icon");

cartIcon.forEach((card) => {
  card.addEventListener("click", () => {
    location.href = "cart.html";
  });
});

/* cart page all function */

document.getElementById("quantity1").addEventListener("change", (e) => {
  let inputValue = e.target.value;
  let input = document.getElementById("quantity1");
  let totalPrice1 = document.getElementById("total1");
  let price1 = 75;

  if (inputValue < 0) {
    alert("Negative Value Are Not Accepted");
    input.style.backgroundColor = "red";
    input.value = 0;
  } else {
    input.style.backgroundColor = "#fff";
    input.style.border = "1px solid #b5b5b5";
    let totalVal = inputValue * price1;
    document.getElementById("subTotalPrice").innerHTML = `$${totalVal + 10} `;
    document.getElementById("total").innerHTML = `$${totalVal + 10} `;
    totalPrice1.innerText = `$${totalVal}`;
  }
});

// 2nd card table

document.getElementById("quantity2").addEventListener("change", (e) => {
  let inputValue = e.target.value;
  let input = document.getElementById("quantity2");
  let totalPrice1 = document.getElementById("total2");
  let price1 = 77;

  if (inputValue < 0) {
    alert("Negative Value Are Not Accepted");
    input.style.backgroundColor = "red";
    input.value = 0;
  } else {
    input.style.backgroundColor = "#fff";
    input.style.border = "1px solid #b5b5b5";
    let totalVal = inputValue * price1;
    document.getElementById("subTotalPrice").innerHTML = `$${totalVal + 10} `;
    document.getElementById("total").innerHTML = `$${totalVal + 10} `;
    totalPrice1.innerText = `$${totalVal}`;
  }
});

// 3rd cart table

document.getElementById("quantity3").addEventListener("change", (e) => {
  let inputValue = e.target.value;
  let input = document.getElementById("quantity3");
  let totalPrice1 = document.getElementById("total3");
  let price1 = 100;

  if (inputValue < 0) {
    alert("Negative Value Are Not Accepted");
    input.style.backgroundColor = "red";
    input.value = 0;
  } else {
    input.style.backgroundColor = "#fff";
    input.style.border = "1px solid #b5b5b5";
    let totalVal = inputValue * price1;
    document.getElementById("subTotalPrice").innerHTML = `$${totalVal + 10} `;
    document.getElementById("total").innerHTML = `$${totalVal + 10} `;
    totalPrice1.innerText = `$${totalVal}`;
  }
});

// 4th cart table

document.getElementById("quantity4").addEventListener("change", (e) => {
  let inputValue = e.target.value;
  let input = document.getElementById("quantity4");
  let totalPrice1 = document.getElementById("total4");
  let price1 = 60;

  if (inputValue < 0) {
    alert("Negative Value Are Not Accepted");
    input.style.backgroundColor = "red";
    input.value = 0;
  } else {
    input.style.backgroundColor = "#fff";
    input.style.border = "1px solid #b5b5b5";
    let totalVal = inputValue * price1;
    document.getElementById("subTotalPrice").innerHTML = `$${totalVal + 10} `;
    document.getElementById("total").innerHTML = `$${totalVal + 10} `;
    totalPrice1.innerText = `$${totalVal}`;
  }
});

// 5th cart table

document.getElementById("quantity5").addEventListener("change", (e) => {
  let inputValue = e.target.value;
  let input = document.getElementById("quantity5");
  let totalPrice1 = document.getElementById("total5");
  let price1 = 115;

  if (inputValue < 0) {
    alert("Negative Value Are Not Accepted");
    input.style.backgroundColor = "red";
    input.value = 0;
  } else {
    input.style.backgroundColor = "#fff";
    input.style.border = "1px solid #b5b5b5";
    let totalVal = inputValue * price1;
    document.getElementById("subTotalPrice").innerHTML = `$${totalVal + 10} `;
    document.getElementById("total").innerHTML = `$${totalVal + 10} `;
    totalPrice1.innerText = `$${totalVal}`;
  }
});
