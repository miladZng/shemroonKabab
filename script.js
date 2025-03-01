"strict mode";
// changing numbers format
// fa to eng
function toEnDigit(s) {
  return s
    .replace(
      /[\u0660-\u0669\u06f0-\u06f9]/g, // Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
      function (a) {
        return a.charCodeAt(0) & 0xf;
      } // Remove the Unicode base(2) range that not match
    )
    .replaceAll(",", "");
}
// eng to fa
function toFaDigit(s) {
  return Intl.NumberFormat("fa-IR").format(s);
}

//hero
let timeHour = new Date().getHours();
let timeMin = new Date().getMinutes();
let time = timeHour * 60 + timeMin;
// changing hours to minutes 1hour*60min
// working hour is between 11 and 00:45
// 11*60=660
// 24(hours)*60 + 45(min)=1485

if (time >= 660 && time <= 1485) {
  document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                    <div class="circle-hero-acceptation"></div><span style='margin:10px ;font-size:1.2rem'>سفارش می‌پذیریم</span>
                 </section>
                 `;
  document.querySelector(".circle-hero-acceptation").classList.add("blinking-green");
} else {
  document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                        <div class="circle-hero-acceptation"></div><p style='margin:10px ;font-size:1.2rem'>در حال حاضر سفارش نمی پذیریم</p><p>شروع سفارش گیری از ۱۱:۰۰:۰۰</p
                     </section>
                     `;
  document.querySelector(".circle-hero-acceptation").classList.add("blinking-red");
}
//
//
//
//
//
//
//
//
//
let cardActive = document.querySelector(".card-active");
let cards = document.querySelectorAll(".component-card");
let allFoods = [];
//
//
//
//
//
//
//login overlay
// openning and closing login active
document.querySelector(".header-login-btn").addEventListener("click", function () {
  document.querySelector(".login-active").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector("html").classList.add("over-flow-y-off");

  // clossing login active
  document.querySelector("#close-btn-login-active").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".login-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  });
  document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".login-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  });
});
//
//
//
//
//
//
//
//
//
//
//
const tajrish = [35.807125, 51.429263];
const dashtBehesht = [35.79331, 51.38969];
const niavaran = [35.807684, 51.440807];

let map = L.map("map").setView(tajrish, 18);
L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let marker = L.marker(tajrish).addTo(map);

//
//
//
// opening and closing location active
document.querySelector(".hero-changing-location-btn").addEventListener("click", function () {
  document.querySelector(".location-active").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector("html").classList.add("over-flow-y-off");

  // chosing location
  // tajrish
  document.querySelector("#location-tajrish").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".location-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".hero-address-location").textContent = "تجریش";
    document.querySelector(".hero-address").textContent = "آدرس: میدان تجریش، ضلع شمال شرقی";
    document.querySelector(".info-part-down-address").textContent = "آدرس: میدان تجریش، ضلع شمال شرقی";
    const tdLunch = document.querySelectorAll(".td-lunch");
    tdLunch.forEach(function (item) {
      item.textContent = "-";
    });
    const tdDinner = document.querySelectorAll(".td-dinner");
    tdDinner.forEach(function (item) {
      item.textContent = "۱۱:۰۰ تا ۰۰:۴۵";
    });
    document.querySelector(".phone").textContent = "۲۲۷۴۶۰۰۸";
    //
    //
    map.remove();
    //
    map = L.map("map").setView(tajrish, 18);
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    marker = L.marker(tajrish).addTo(map);
    //
    //
    // receiving order
    //
    if (time >= 660 && time <= 1485) {
      document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                        <div class="circle-hero-acceptation"></div><span style='margin:10px ;font-size:1.2rem'>سفارش می‌پذیریم</span>
                     </section>
                     `;
      document.querySelector(".circle-hero-acceptation").classList.add("blinking-green");
    } else {
      document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                            <div class="circle-hero-acceptation"></div><p style='margin:10px ;font-size:1.2rem'>در حال حاضر سفارش نمی پذیریم</p><p>شروع سفارش گیری از ۱۱:۰۰:۰۰</p
                         </section>
                         `;
      document.querySelector(".circle-hero-acceptation").classList.add("blinking-red");
    }
  });
  // niavaran
  document.querySelector("#location-niavaran").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".location-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".hero-address-location").textContent = "نیاوران";
    document.querySelector(".hero-address").textContent = "آدرس: نیاوران، بعد از چهارراه مژده، پلاک ۴۴۵";
    document.querySelector(".info-part-down-address").textContent = "آدرس: نیاوران، بعد از چهارراه مژده، پلاک ۴۴۵";
    const tdDinner = document.querySelectorAll(".td-dinner");
    tdDinner.forEach(function (item) {
      item.textContent = "۱۷:۴۵ تا ۲۳:۴۵";
    });
    const tdLunch = document.querySelectorAll(".td-lunch");
    tdLunch.forEach(function (item) {
      item.textContent = "۱۱:۳۰ تا ۱۷:۴۵";
    });
    document.querySelector(".phone").textContent = "۲۲۷۴۶۰۰۸";

    //
    //
    //
    map.remove();
    //
    map = L.map("map").setView(niavaran, 18);
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    marker = L.marker(niavaran).addTo(map);
    //
    //
    //
    // receiving order
    //
    if (time >= 690 && time <= 1425) {
      document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                        <div class="circle-hero-acceptation"></div><span style='margin:10px ;font-size:1.2rem'>سفارش می‌پذیریم</span>
                     </section>
                     `;
      document.querySelector(".circle-hero-acceptation").classList.add("blinking-green");
    } else {
      document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                            <div class="circle-hero-acceptation"></div><p style='margin:10px ;font-size:1.2rem'>در حال حاضر سفارش نمی پذیریم</p><p>شروع سفارش گیری از ۱۱:۳۰:۰۰</p
                         </section>
                         `;
      document.querySelector(".circle-hero-acceptation").classList.add("blinking-red");
    }
  });

  // dasht-behesht
  document.querySelector("#location-dasht-behesht").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".location-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".hero-address-location").textContent = "دشت بهشت";
    document.querySelector(".hero-address").textContent = "آدرس: اوین، ابتدای خیابان دشت بهشت ، پلاک ۲۱";
    document.querySelector(".info-part-down-address").textContent = "آدرس: اوین، ابتدای خیابان دشت بهشت ، پلاک ۲۱";
    const tdLunch = document.querySelectorAll(".td-lunch");
    tdLunch.forEach(function (item) {
      item.textContent = "۱۱:۰۰ تا ۱۹:۰۰";
    });
    const tdDinner = document.querySelectorAll(".td-dinner");
    tdDinner.forEach(function (item) {
      item.textContent = "۱۹:۰۰ تا ۲۳:۴۵";
    });
    document.querySelector(".phone").textContent = "۲۲۷۴۶۰۰۷";

    //
    //
    //
    map.remove();
    //
    map = L.map("map").setView(dashtBehesht, 18);
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    marker = L.marker(dashtBehesht).addTo(map);
    //
    //
    //
    // receiving order
    //
    if (time >= 690 && time <= 1425) {
      document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                        <div class="circle-hero-acceptation"></div><span style='margin:10px ;font-size:1.2rem'>سفارش می‌پذیریم</span>
                     </section>
                     `;
      document.querySelector(".circle-hero-acceptation").classList.add("blinking-green");
    } else {
      document.querySelector(".hero-acceptation").innerHTML = `<section class="container-hero-acceptation">
                            <div class="circle-hero-acceptation"></div><p style='margin:10px ;font-size:1.2rem'>در حال حاضر سفارش نمی پذیریم</p><p>شروع سفارش گیری از ۱۱:۳۰:۰۰</p
                         </section>
                         `;
      document.querySelector(".circle-hero-acceptation").classList.add("blinking-red");
    }
  });

  // clossing login active
  document.querySelector("#close-btn-location-active").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".location-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  });
  document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector("html").classList.remove("over-flow-y-off");
    document.querySelector(".location-active").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  });
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// scrolling to parts in right main part
document.querySelector("#kabab-nav").addEventListener("click", function () {
  document.querySelector("#kabab").scrollIntoView();
});
document.querySelector("#complex-menu-nav").addEventListener("click", function () {
  document.querySelector("#complex-menu").scrollIntoView();
});
document.querySelector("#starter-nav").addEventListener("click", function () {
  document.querySelector("#starter").scrollIntoView();
});
document.querySelector("#drink-nav").addEventListener("click", function () {
  document.querySelector("#drink").scrollIntoView();
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// opening and closing modal cards

// if windows width was bigger than 650px

//

//adding click event for each card

cards.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    // e.preventDefault();
    e.stopPropagation();
    //
    // showing modal card
    document.querySelector(".card-active").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector("html").classList.add("over-flow-y-off");
    //
    //

    //
    // changing elements of modal card
    const cardClickedFirstParent = e.target.closest(".component-card");
    const cardClickedFoodName = cardClickedFirstParent.querySelector(".component-card-name-and-price p").innerHTML;
    const cardClickedFoodPrice = cardClickedFirstParent.querySelector(".component-card-name-and-price span").innerHTML;
    const cardClickedImgUrl = cardClickedFirstParent.querySelector(".component-card-top img").getAttribute("src");

    // changing image url
    cardActive.querySelector(".card-active img").setAttribute("src", cardClickedImgUrl);
    // changing name
    cardActive.querySelector(".card-active-name-and-price p").innerHTML = cardClickedFoodName;
    // changing price
    cardActive.querySelector(".card-active-price").innerHTML = cardClickedFoodPrice;
    cardActive.querySelector(".card-active-down-add-to-basket .card-active-price").innerHTML = cardClickedFoodPrice;

    // changing receipe
    if (cardClickedFirstParent.querySelector(".component-card-ingredient p").innerHTML) {
      const ingredient = cardClickedFirstParent.querySelector(".component-card-ingredient p").innerHTML;
      cardActive.querySelector(".card-active-ingredients").innerHTML = ingredient;
    } else {
      cardActive.querySelector(".card-active-ingredients").innerHTML = " ";
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // adding and reducing in modal windows

    let modalCount = 1;
    let priceActive = "";

    document.querySelector(".card-active-down-add").addEventListener("click", function () {
      priceActive = toEnDigit(document.querySelector(".card-active-price").innerHTML);
      modalCount++;
      document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalCount);
      document.querySelector(".card-active-price-total").innerHTML = toFaDigit(modalCount * priceActive);
      document.querySelector(".card-active-down-sub").classList.remove("hidden");
      document.querySelector(".overlay").addEventListener("click", function () {
        modalCount = 1;
        document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalCount);
        document.querySelector(".card-active-down-sub").classList.add("hidden");
      });
      //
      document.querySelector("#close-btn-card-active").addEventListener("click", function () {
        modalCount = 1;
        document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalCount);
        document.querySelector(".card-active-down-sub").classList.add("hidden");
      });
    });
    // decreasing component
    document.querySelector(".card-active-down-sub").addEventListener("click", function () {
      priceActive = toEnDigit(document.querySelector(".card-active-price").innerHTML);

      modalCount--;
      document.querySelector(".card-active-price-total").innerHTML = toFaDigit(modalCount * priceActive);
      if (modalCount === 1) {
        document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalCount);
        document.querySelector(".card-active-down-sub").classList.add("hidden");
      } else {
        document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalCount);
      }
    });
    //
    //
    //

    //
    //
    //
    // click on to basket listener
    //
    //
    //
    //
    // closing modal
    document.querySelector("#close-btn-card-active").addEventListener("click", function () {
      document.querySelector(".card-active").classList.add("hidden");
      document.querySelector(".overlay").classList.add("hidden");
      document.querySelector("html").classList.remove("over-flow-y-off");
    });
    document.querySelector(".overlay").addEventListener("click", function () {
      document.querySelector("html").classList.remove("over-flow-y-off");
      document.querySelector(".card-active").classList.add("hidden");
      document.querySelector(".overlay").classList.add("hidden");
    });
  });
  //
  //
  //
  // end of opening and closing modal card
});
// if screen wasn't 650px

//
//
//
//
//

//
//
document.querySelector(".card-active-down-add-to-basket").addEventListener("click", function (e) {
  const parentModal = e.target.closest(".card-active");
  const modalFoodName = parentModal.querySelector(".card-active-name").innerHTML;
  const modalPrice = Number(toEnDigit(parentModal.querySelector(".card-active-price").innerHTML));

  let modalNumber = Number(toEnDigit(document.querySelector(".card-active-down-sub-and-add span").innerHTML));

  document.querySelector(".card-active").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector("html").classList.remove("over-flow-y-off");
  //
  //
  //
  // console.log(modalCount);
  // hidding  empty basket
  document.querySelector(".main-left").classList.add("hidden");
  //
  //
  //

  //
  //
  // showing basket including
  document.querySelector(".main-left-including").classList.remove("hidden");
  //
  //
  //

  if (allFoods.includes(modalFoodName)) {
    const i = allFoods.indexOf(modalFoodName) + 1;
    const recordCount = Number(toEnDigit(document.querySelector(`#id-${i}`).innerHTML));
    document.querySelector(`#id-${i}`).innerHTML = toFaDigit(recordCount + modalNumber);
  } else {
    allFoods.push(modalFoodName);
    const recordId = allFoods.indexOf(modalFoodName) + 1;
    const str = `<div class="main-left-including-middle-record" id='rec-${recordId}'><div class="main-left-including-middle-right">
    <span class="record-name" >${modalFoodName}</span>
    <div><span class="record-price"> ${toFaDigit(modalPrice)}  </span><span class=''>تومان</span></div>
    </div>
    <button class="card-active-down-sub"id='sub-${recordId}'>&minus;</button>
    <span class="record-count" id="id-${recordId}">${toFaDigit(modalNumber)}</span>
    <button class="card-active-down-add"id='add-${recordId}'>&plus;</button>
    </div>`;
    document.querySelector(".main-left-including-middle").insertAdjacentHTML("beforeend", str);
    document.querySelector(".record-count").setAttribute("data-record-count", modalNumber);
    //
    //
    //
  }

  modalNumber = 1;
  document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalNumber);
  document.querySelector(".card-active-down-sub").classList.add("hidden");
  //
  //
  //
  let basketCount = document.querySelectorAll(".record-count");
  let acc = 0;
  let prices = [];
  let counts = [];
  let totalPrice = 0;
  basketCount.forEach(function (item) {
    counts.push(Number(toEnDigit(item.innerHTML)));
    acc = Number(toEnDigit(item.innerHTML)) + acc;
  });
  document.querySelector(".total-count").innerHTML = toFaDigit(acc);
  //
  //
  //
  let basketPrice = document.querySelectorAll(".record-price");
  let price = 0;
  basketPrice.forEach(function (item) {
    prices.push(Number(toEnDigit(item.innerHTML.split("٬").join(""))));
    price = Number(toEnDigit(item.innerHTML.split("٬").join(""))) + price;
  });

  for (let i = 0; i < prices.length; i++) {
    totalPrice = prices[i] * counts[i] + totalPrice;
  }

  document.querySelector(".total-price").innerHTML = toFaDigit(totalPrice);
  // document.querySelector(".total-price").innerHTML = toFaDigit(price);

  // console.log(price);
  //
  //
  //

  //
  //
});

//
//
//
document.querySelector(".recyle-basket").addEventListener("click", function () {
  document.querySelector(".main-left-including").classList.add("hidden");
  document.querySelector(".main-left").classList.remove("hidden");
  document.querySelector(".main-left-including-middle").innerHTML = " ";
  prices = [];
  counts = [];
  allFoods = [];
  totalPrice = 0;
});

//
//
//
// FIXME:

document.querySelector(".main-left-including-middle").addEventListener("click", function (e) {
  let basketCount = document.querySelectorAll(".record-count");
  let acc = 0;
  let prices = [];
  let counts = [];
  let totalPrice = 0;
  if (e.target.getAttribute("class") === "card-active-down-sub") {
    const id = e.target.getAttribute("id").split("-")[1];
    let recordCount = Number(toEnDigit(document.querySelector(`#id-${id}`).innerHTML));
    recordCount--;
    if (recordCount !== 0) {
      document.querySelector(`#id-${id}`).innerHTML = toFaDigit(recordCount);
    } else {
      document.querySelector(`#id-${id}`).closest(`#rec-${id}`).remove();
      //
      //
      //
      //
    }
    if (document.querySelector(".main-left-including-middle").childNodes.length === 0) {
      document.querySelector(".main-left-including").classList.add("hidden");
      document.querySelector(".main-left").classList.remove("hidden");
      document.querySelector(".main-left-including-middle").innerHTML = "";
      prices = [];
      counts = [];
      allFoods = [];
      totalPrice = 0;
    }
  }
  // basket plus
  if (e.target.getAttribute("class") === "card-active-down-add") {
    const id = e.target.getAttribute("id").split("-")[1];
    let recordCount = Number(toEnDigit(document.querySelector(`#id-${id}`).innerHTML));
    recordCount++;
    document.querySelector(`#id-${id}`).innerHTML = toFaDigit(recordCount);
  }

  //
  //
  //// updating basket
  //
  modalNumber = 1;
  document.querySelector(".card-active-down-sub-and-add span").innerHTML = toFaDigit(modalNumber);
  document.querySelector(".card-active-down-sub").classList.add("hidden");
  //
  //
  //
  //
  basketCount.forEach(function (item) {
    counts.push(Number(toEnDigit(item.innerHTML)));
    acc = Number(toEnDigit(item.innerHTML)) + acc;
  });
  document.querySelector(".total-count").innerHTML = toFaDigit(acc);
  //
  //
  //
  let basketPrice = document.querySelectorAll(".record-price");
  let price = 0;
  basketPrice.forEach(function (item) {
    prices.push(Number(toEnDigit(item.innerHTML.split("٬").join(""))));
    price = Number(toEnDigit(item.innerHTML.split("٬").join(""))) + price;
  });

  for (let i = 0; i < prices.length; i++) {
    totalPrice = prices[i] * counts[i] + totalPrice;
  }

  document.querySelector(".total-price").innerHTML = toFaDigit(totalPrice);
});

//
//
//
document.querySelector(".main-right-nav-order-btn").addEventListener("click", function () {
  document.querySelector(".components-part").classList.remove("hidden");
  document.querySelector(".info-part").classList.add("hidden");
  // adding border
  document.querySelector(".main-right-nav-order-btn").classList.add("info-and-components-active");
  document.querySelector(".main-right-nav-info-btn").classList.remove("info-and-components-active");
});
document.querySelector(".main-right-nav-info-btn").addEventListener("click", function () {
  document.querySelector(".components-part").classList.add("hidden");
  document.querySelector(".info-part").classList.remove("hidden");
  // adding border
  document.querySelector(".main-right-nav-order-btn").classList.remove("info-and-components-active");
  document.querySelector(".main-right-nav-info-btn").classList.add("info-and-components-active");
});
