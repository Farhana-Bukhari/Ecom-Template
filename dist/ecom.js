const footer1 = document.querySelector(".footer1");
const footer2 = document.querySelector(".footer2");

const menuBarBtn = document.querySelector(".menuBarBtn");
const menuModalWindow = document.querySelector(".menuModalWindow");
const closeBtn = document.querySelector(".closeBtn");

const about = document.querySelector(".about");
const sustainability = document.querySelector(".sustainability");
const product = document.querySelector(".product");

const aboutModalWindow = document.querySelector(".aboutModalWindow");
const SustainabilityModalWindow = document.querySelector(
  ".SustainabilityModalWindow"
);
const productModalWindow = document.querySelector(".productModalWindow");

const backtoTop = document.querySelector(".backtoTop");

const footerElement1 = [
  {
    id: 1,
    link1: "About us",
    link2: "Sustainability",
    link3: "Cocoa",
    link4: "Coffee",
    link5: "Cotton",
    link6: " News & insights",
    link7: "Contact",
  },
  {
    id: 2,
    link1: "Conditions of Use",
    link2: "Privacy Policy ",
    link3: "Cookie Policy",
    link4: "Disclaimers",
    link5: "Other policies",
    link6: " ",
    link7: " ",
  },
  {
    id: 3,
    link1: "LinkedIn    ",
    link2: "Twitter",
    link3: "YouTube",
    link4: "Facebook",
    link5: "Instagram",
    link6: " ",
    link7: " ",
  },
];

const data = footerElement1.map((ele) => {
  if (ele === footerElement1[1]) {
    return `
    <div class="divv" style=" display:flex; justify-content:center; align-items:center; border-left: 1px solid white; border-right: 1px solid white; margin-bottom:3rem"><ul style= class="footerElement1">
  <li style="margin"><a>${ele.link1}</a></li>
  <li><a>${ele.link2}</a></li>
  <li><a>${ele.link3}</a></li>
  <li><a>${ele.link4}</a></li>
  <li><a>${ele.link5}</a></li>
  <li><a>${ele.link6}</a></li>
  <li><a>${ele.link7}</a></li>
  </ul>
  </div>
    `;
  } else {
    return `<div class="divv" style=" display:flex; justify-content:center; align-items:center; margin-bottom:5rem"><ul style= class="footerElement1">
    <li style="margin"><a>${ele.link1}</a></li>
    <li><a>${ele.link2}</a></li>
    <li><a>${ele.link3}</a></li>
    <li><a>${ele.link4}</a></li>
    <li><a>${ele.link5}</a></li>
    <li><a>${ele.link6}</a></li>
    <li><a>${ele.link7}</a></li>
    </ul>
    </div>`;
  }
});

footer1.innerHTML = data.join(" ");

const mediaQuery = window.matchMedia("(max-width:768px)");
console.log(mediaQuery);

const divv = document.querySelectorAll(".divv");

function handleScreenSizeChange(mediaQuery) {
  if (mediaQuery.matches) {
    divv.forEach((ele) => {
      ele.style.justifyContent = "flex-start";
      // ele.style.alignItems = "flex-start";
      ele.style.marginLeft = "4rem";
      ele.style.paddingTop = "3rem";
      ele.style.paddingBottom = "3rem";
      ele.style.marginBottom = "0";
      divv[1].style.borderTop = "1px solid white";
      divv[1].style.borderBottom = "1px solid white";
      divv[1].style.borderLeft = "none";
      divv[1].style.borderRight = "none";
    });
  } else {
    divv.forEach((ele) => {
      ele.style.justifyContent = "center";
      divv[1].style.borderTop = "none";
      divv[1].style.borderBottom = "none";
      divv[1].style.borderLeft = "1px solid white";
      divv[1].style.borderRight = "1px solid white";
    });
  }
}

mediaQuery.addEventListener("change", function () {
  handleScreenSizeChange(mediaQuery);
});

const footerElement2 = [
  {
    id: 1,
    text1:
      "Copyright 2022 ECOM Agroindustrial Corp. Limited. All Rights Reserved.",
    image: "../assets/googlesign.svg",
    text2: "Created by",
    link: " Gather.london",
  },
];
const data2 = footerElement2.map((ele) => {
  return `<div>
    <p style="font-size:8px; font-weight:400; text-align:center;">${ele.text1}</p>
    <div style="display:flex; justify-content:center; aligh-items:center"><img style="height:20px; width:20px; margin-bottom:5px; margin-top:7px;" src="${ele.image}"></div>
    
    <p style="font-size:8px; font-weight:400; text-align:center">${ele.text2}<a style="text-decoration:underline; font-weight:500">${ele.link}</a></p>
    </div>`;
});
footer2.innerHTML = data2.join(" ");

menuBarBtn.addEventListener("click", function () {
  menuModalWindow.classList.remove("hidden");
  menuBarBtn.classList.add("hidden");
  console.log("hidden");
  closeBtn.classList.remove("hidden");
});
closeBtn.addEventListener("click", function () {
  console.log("closed");
  menuModalWindow.classList.add("hidden");
  menuBarBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
});

sustainability.addEventListener("mouseover", function () {
  SustainabilityModalWindow.classList.remove("hidden");
});
sustainability.addEventListener("mouseout", function () {
  SustainabilityModalWindow.classList.add("hidden");
});

about.addEventListener("mouseover", function () {
  aboutModalWindow.classList.remove("hidden");
});
about.addEventListener("mouseout", function () {
  aboutModalWindow.classList.add("hidden");
});

product.addEventListener("mouseover", function () {
  productModalWindow.classList.remove("hidden");
});
product.addEventListener("mouseout", function () {
  productModalWindow.classList.add("hidden");
});

backtoTop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  // window.scrollTo(0, 0);
});
