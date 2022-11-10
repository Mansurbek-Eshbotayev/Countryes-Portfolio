const elList = document.querySelector(".country__list");
const elForm = document.querySelector(".count__form");
const elFormSelect = document.querySelector(".form__select");
const elRegionSelect = document.querySelector(".form__region");
const elSubregionSelect = document.querySelector(".form__subregion");
const elFormInput = document.querySelector(".form__input");
const elModal = document.querySelector(".modal__own");

// Modal Title
const elModalTitle = document.querySelector(".modal-title");
const elModalImg = document.querySelector(".modal__img");
const elModalLang = document.querySelector(".mod__lang");
const elModalCur = document.querySelector(".mod__cur");
const elModalSub = document.querySelector(".mod__sub");
const elModalArea = document.querySelector(".mod__area");
const elModalFifa = document.querySelector(".fifa");
const elModalCar = document.querySelector(".mod__car");

 // color body
 const bgcols = ["#E56399", "#D3A588", "#ECE2D0", "#7FD1B9", "#7A6563"];
 const changeBG = () => {
   const index = Math.floor(Math.random() * 5);
   document.body.style.cssText = "background-color: " + bgcols[index];
 };
 setInterval(changeBG, 7000);




// create All country function
function CreateCoutry() {
  try {
    fetch(`https://restcountries.com/v3.1/all`)
    .then((req) => req)
    .then((data) => data.json())
    .then((data) => {
      let info = data.slice(3, 31);
      info.forEach((item) => {
        // console.log(item);
        let itemFragment = new DocumentFragment();
        let iewItem = document.createElement("li");
        iewItem.setAttribute("class", "count__item");
        let infoCard = `
        <div class="card border-0" style="width: 18rem;">
        <img  src="${item.flags.png}" class="card-img-top img-fluid card__img" alt="Picture">
        <div class="card-body">
        <h5 class="card-title mb-3">${item.name.common}</h5>
        <p class="card-text">Papulation:<span class="popul fw-bold"> ${item.population}</span></p>
        <p class="card-text">Region:<span class="region fw-bold"> ${item.region}</span></p>
        <p class="card-text">Capital:<span class="capital fw-bold"> ${item.capital}</span></p>
        <button href="#" class="btn btn-primary btn__id" data-id=${item.name.common}
        data-bs-toggle="modal" data-bs-target="#exampleModal">more info</button>
        </div>
        </div>
        `;
        
        iewItem.innerHTML = infoCard;
        itemFragment.appendChild(iewItem);
        elList.appendChild(itemFragment);
      });
    });
  } catch (error) {
    console.log("Errror");
  }
}

// search region select function
function regionSelect(arr, element) {
  element.innerHTML = "";
  try {
    fetch(`https://restcountries.com/v3.1/region/${arr}`)
    .then((req) => req)
    .then((data) => data.json())
    .then((data) => {
      // let info = data.slice(3,31);
      data.forEach((item) => {
        // console.log(item);
        let itemFragment = new DocumentFragment();
        let iewItem = document.createElement("li");
        iewItem.setAttribute("class", "count__item");
        let infoCard = `
        <div class="card border-0" style="width: 18rem;">
        <img  src="${item.flags.png}" class="card-img-top img-fluid card__img" alt="Picture">
        <div class="card-body">
        <h5 class="card-title mb-3">${item.name.common}</h5>
        <p class="card-text">Papulation:<span class="popul fw-bold"> ${item.population}</span></p>
        <p class="card-text">Region:<span class="region fw-bold"> ${item.region}</span></p>
        <p class="card-text">Capital:<span class="capital fw-bold"> ${item.capital}</span></p>
        <button href="#" class="btn btn-primary btn__id" data-id=${item.name.common} data-bs-toggle="modal" data-bs-target="#exampleModal">more info</button>
        </div>
        </div>
        `;
        
        iewItem.innerHTML = infoCard;
        itemFragment.appendChild(iewItem);
        elList.appendChild(itemFragment);
      });
    });
  } catch (error) {
    console.log("Errror");
  }
}

// search Subregion select function
function subRegionSelect(arr, element) {
  element.innerHTML = "";
  try {
    fetch(`https://restcountries.com/v3.1/subregion/${arr}`)
    .then((req) => req)
    .then((data) => data.json())
    .then((data) => {
      // let info = data.slice(3,31);
      data.forEach((item) => {
        // console.log(item);
        let itemFragment = new DocumentFragment();
        let iewItem = document.createElement("li");
        iewItem.setAttribute("class", "count__item");
        let infoCard = `
        <div class="card border-0" style="width: 18rem;">
        <img  src="${item.flags.png}" class="card-img-top img-fluid card__img" alt="Picture">
        <div class="card-body">
        <h5 class="card-title mb-3">${item.name.common}</h5>
        <p class="card-text">Papulation:<span class="popul fw-bold"> ${item.population}</span></p>
        <p class="card-text">Region:<span class="region fw-bold"> ${item.region}</span></p>
        <p class="card-text">Capital:<span class="capital fw-bold"> ${item.capital}</span></p>
        <button href="#" class="btn btn-primary btn__id" data-id=${item.name.common} data-bs-toggle="modal" data-bs-target="#exampleModal">more info</button>
        </div>
        </div>
        `;
        
        iewItem.innerHTML = infoCard;
        itemFragment.appendChild(iewItem);
        elList.appendChild(itemFragment);
      });
    });
  } catch (error) {
    console.log("Errror");
  }
}

// search by Name function
function searchName(arr, element) {
  element.innerHTML = "";
  
  try {
    fetch(`https://restcountries.com/v3.1/name/${arr}`)
    .then((req) => req)
    .then((data) => data.json())
    .then((data) => {
      data.forEach((item) => {
        let itemFragment = new DocumentFragment();
        let iewItem = document.createElement("li");
        iewItem.setAttribute("class", "count__item");
        let infoCard = `
        <div class="card border-0" style="width: 18rem;">
        <img  src="${item.flags.png}" class="card-img-top img-fluid card__img" alt="Picture">
        <div class="card-body">
        <h5 class="card-title mb-3">${item.name.common}</h5>
        <p class="card-text">Papulation:<span class="popul fw-bold"> ${item.population}</span></p>
        <p class="card-text">Region:<span class="region fw-bold"> ${item.region}</span></p>
        <p class="card-text">Capital:<span class="capital fw-bold"> ${item.capital}</span></p>
        <button href="#" class="btn btn-primary btn__id" data-id=${item.name.common} data-bs-toggle="modal" data-bs-target="#exampleModal">more info</button>
        </div>
        </div>
        `;
        
        iewItem.innerHTML = infoCard;
        itemFragment.appendChild(iewItem);
        elList.appendChild(itemFragment);
      });
    });
  } catch (error) {
    console.log("Errror");
  }
}

// dom create
CreateCoutry();

// Select change
elFormSelect.addEventListener("change", function () {
  if (elFormSelect.value == "region") {
    elRegionSelect.classList.remove("item-off");
    elSubregionSelect.classList.add("item-off");
  } else if (elFormSelect.value == "subregion") {
    elRegionSelect.classList.add("item-off");
    elSubregionSelect.classList.remove("item-off");
  } else {
    elRegionSelect.classList.add("item-off");
    elSubregionSelect.classList.add("item-off");
  }
});

// Debounse Function
function debounce(func, wait, immediate) {
  var timeout;
  
  return function executedFunction() {
    var context = this;
    var args = arguments;
    
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    var callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

// search function
elForm.addEventListener(
  "keyup",
  debounce(function (evt) {
    evt.preventDefault();
    elList.innerHTML = "";
    searchName(elFormInput.value.trim(), elList);
    if (elFormInput.value == "") {
      CreateCoutry();
    }
  }, 2000)
  );
  
  elForm.addEventListener("change", (evt) => {
    evt.preventDefault();
    if (elFormSelect.value == "region") {
      if (elRegionSelect.value == "Regions") {
        elList.innerHTML = "";
        CreateCoutry();
      } else {
        regionSelect(elRegionSelect.value, elList);
      }
    } else if (elFormSelect.value == "subregion") {
      if (elSubregionSelect.value == "Subregion") {
        elList.innerHTML = "";
        CreateCoutry();
      } else {
        subRegionSelect(elSubregionSelect.value, elList);
      }
    }
  });
  
  // crateModal
  function createModal(arr){
    fetch(arr)
    .then((res) => res.json())
    .then((data) => {
      if(data.length) {
        elModalTitle.textContent = data[0].name.common;
        elModalImg.src = data[0].flags.png;

        let lang = (Object.values(data[0].languages).join(", "));
        elModalLang.textContent = lang
        
        let curre = (Object.keys(data[0].currencies));
        curre.forEach(item => {
          elModalCur.textContent = item  
        })
        elModalSub.textContent = data[0].subregion;
        elModalArea.textContent = data[0].area;
        elModalFifa.textContent = data[0].fifa;
        elModalCar.textContent = data[0].car.signs;
      }
    });
  }
  
  function renderModal (evt){
    btnId = evt.target.matches(".btn__id");;
    if (btnId) {
      itemId = evt.target.dataset.id;
      console.log(itemId);
      createModal(`https://restcountries.com/v3.1/name/${itemId}`);
    }
  }
  // Modall
  elList.addEventListener("click", evt =>{
    renderModal(evt)
  } )
  
  
  
  
 
  
  
  