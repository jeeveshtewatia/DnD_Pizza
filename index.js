const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const pizza = document.querySelector("#main");

let boxOne = "box1";
let boxTwo = "box2";
let count = 1;
let dragItem = null;
let amount = 0;
let topItem = null;
let topp = false;
let base = true;

// =================First Base Selected (Box1)=============
box1.addEventListener("dragstart", dragStart);
box1.addEventListener("dragend", dragEnd);

function dragStart() {
  console.log("drag started ");
  setTimeout(() => {
    amount += 429;
    dragItem = boxOne;
    this.classList.add("dragging");
  }, 0);
}

function dragEnd() {
  console.log("drag ended ");
  this.classList.remove("dragging");
}

//===========Second Base Selection=================
box2.addEventListener("dragstart", dragStart2);
box2.addEventListener("dragend", dragEnd2);

function dragStart2() {
  console.log("drag started ");
  setTimeout(() => {
    amount += 549;
    dragItem = boxTwo;
    this.classList.add("dragging");
  }, 0);
}

function dragEnd2() {
  console.log("drag ended ");
  this.classList.remove("dragging");
}
//=====Second Base selection end =============

//=======================data for ingredients ==================
let array = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1ezdPHbb2Kdv9P0GkBncM3TX1pw3cwydmA&usqp=CAU",
    head: "Onion / \u20b9 69",
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg2KSexEWrtESZ3fsl03E_fy0wgbLj2RhyQ&usqp=CAU",
    head: "Paneer / \u20b9  99",
    id: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISm7xv1cC2argAWk-fijv4yGKj885sYO4hQ&usqp=CAU",
    head: "Capsicum / \u20b9  39",
    id: 3,
  },
];

// ==================function for uploading ingredients on web ============================
function topping() {
  pizza.innerHTML = "";
  if (count == 1) {
    let top = document.querySelector(".top");

    array.forEach((item) => {
      let div = document.createElement("div");
      div.setAttribute("class", "child animate__animated animate__fadeInDown");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");

      img.setAttribute("src", item.img);
      img.setAttribute("id", item.id);
      img.setAttribute("draggable", true);
      img.setAttribute("alt", "from js");
      h3.innerText = item.head;
      div.appendChild(img);
      div.appendChild(h3);
      top.append(div);
    });
  }
  console.log("value of top", topp);
  toppingConst();
  count++;
}

//===============Function for adding Gradients on Pizza =========================
function toppingConst() {
  //==============For Chilly (first Gradient)==================
  let chillyy = document.getElementById("1");
  chillyy.addEventListener("dragstart", dragStartChilly);
  chillyy.addEventListener("dragend", dragEndChilly);

  function dragStartChilly() {
    console.log("drag started chilly");
    setTimeout(() => {
      amount += 69;
      topp = true;
      topItem = "chilly";
      this.classList.add("dragging");
    }, 0);
  }

  function dragEndChilly() {
    base = false;

    console.log("drag ended chilly");
    this.classList.remove("dragging");
  }

  //=============For Paneer (Second Gradient)==================
  let paneer = document.getElementById("2");
  paneer.addEventListener("dragstart", dragStartPaneer);
  paneer.addEventListener("dragend", dragEndPaneer);

  function dragStartPaneer() {
    console.log("drag started paneer");
    setTimeout(() => {
      amount += 99;
      topp = true;
      topItem = "paneer";
      this.classList.add("dragging");
    }, 0);
  }

  function dragEndPaneer() {
    base = false;

    console.log("drag ended paneer ");
    this.classList.remove("dragging");
  }

  //===================For Capsicum (Third Gradient) ===========================
  let capsicum = document.getElementById("3");
  capsicum.addEventListener("dragstart", dragStartCapsicum);
  capsicum.addEventListener("dragend", dragEndCapsicum);

  function dragStartCapsicum() {
    console.log("drag started capsicum");
    setTimeout(() => {
      amount += 39;
      topp = true;
      topItem = "capsicum";
      this.classList.add("dragging");
    }, 0);
  }

  function dragEndCapsicum() {
    base = false;

    console.log("drag ended capsicum");
    this.classList.remove("dragging");
  }
}
// =========Total amount (Price)===============
function amountp() {
  document.getElementById("amount").innerHTML = amount;
}
//===============functionality for final Pizza ========================
pizza.addEventListener("dragover", dragOver);
pizza.addEventListener("dragenter", dragEnter);
pizza.addEventListener("dragleave", dragLeave);
pizza.addEventListener("drop", dragDrop);

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = " drag";
}

function dragDrop(e) {
  topping();
  amountp();
  if (base) {
    this.className = dragItem;
  }
  if (topp) {
    this.className = topItem;
  }
  // e.target.classList = "box2";
}
