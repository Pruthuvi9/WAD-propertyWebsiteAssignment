document.addEventListener("DOMContentLoaded", () => {
  let propTitle = document.querySelector(".prop-title");
  let propType = document.querySelector(".prop-type");
  let propPrice = document.querySelector(".prop-price");
  let propRooms = document.querySelector(".prop-bedroom");
  let propDesc = document.querySelector(".prop-desc");

  let favBtn = document.querySelector(".favourite-btn span");
  let favtext = document.querySelector("#favourite-text");

  let thumbnailContainer = document.getElementById("thumbnail-container");
  let thumbnailTemplate = document.getElementById("thumbnail-template");

  let carPrev = document.getElementById("carousel-control-prev");
  let carNext = document.getElementById("carousel-control-next");

  let smallImgContainer = document.getElementById("sm-img-slider");
  let smallImgTemplate = document.getElementById("sm-img-template");

  // Get property from local storage
  let url = window.location.pathname;
  let paths = url.split('/');
  let propHtml = paths[paths.length - 1];
  let propId = propHtml.split('.')[0];

  let properties = JSON.parse(localStorage.getItem("properties"));
  let property = properties.find((prop) => prop.id === propId);

  let favBool = property.favourite;

  propTitle.innerHTML = `${property.location} ${property.postcode}`;
  propType.innerHTML = property.type;
  propPrice.innerHTML = `&#163 ${property.price.toLocaleString()}`;
  propRooms.innerHTML = `Bedrooms: ${property.bedrooms.toLocaleString()}`;
  propDesc.innerHTML = property.description;

  // Favourite property functionality
  function changeFavBtn() {
    if (favBool) {
      favBtn.classList.remove("heart-nf-icon");
      favBtn.classList.add("heart-f-icon");

      favtext.textContent = "Added to favourites";
    } else {
      favBtn.classList.remove("heart-f-icon");
      favBtn.classList.add("heart-nf-icon");

      favtext.textContent = "Add to favourites";
    }
  }

  function favBtnHandler() {
    property.favourite = !property.favourite;
    properties.map((prop) => {
      if (prop.id === propId) {
        prop.favourite = property.favourite
      }
    });

    favBool = !favBool;
    changeFavBtn();
  }

  changeFavBtn();

  favBtn.addEventListener("click", favBtnHandler);

  // Populate carousel and small img slider
  for (let i = 0; i < property.pictures.length; i++) {
    let pic = property.pictures[i];
    let thumbnailDiv = thumbnailTemplate.content.cloneNode(true);
    thumbnailDiv.querySelector(".thumbnail-img").setAttribute("src", `../${pic}`);
    thumbnailDiv.querySelector(".thumbnail-img").setAttribute("data-img", `${i}`);
    thumbnailDiv.querySelector(".thumbnail-img-container").classList.add("carousel-item");

    let smallImgDiv = smallImgTemplate.content.cloneNode(true);
    smallImgDiv.querySelector(".sm-img").setAttribute("src", `../${pic}`);
    smallImgDiv.querySelector(".sm-img-container").setAttribute("data-img", `${i}`);

    if (i === 0) {
      thumbnailDiv.querySelector(".thumbnail-img-container").classList.add("active");
      smallImgDiv.querySelector(".sm-img-container").classList.add("active");
    }

    thumbnailContainer.appendChild(thumbnailDiv);
    smallImgContainer.appendChild(smallImgDiv);
  }

  // Carousel btn functionality
  carPrev.addEventListener('click', () => {
    let currentImg = thumbnailContainer.querySelector(".active");
    let prevImg = currentImg.previousElementSibling;

    let currSmImgCont = smallImgContainer.querySelector(".active");
    let prevSmImgCont = currSmImgCont.previousElementSibling;

    if (prevImg !== null) {
      for (let el of thumbnailContainer.children) {
        el.classList.remove("active");
      }
      prevImg.classList.add("active");
    }

    if (prevSmImgCont !== null) {
      for (let el of smallImgContainer.children) {
        el.classList.remove("active");
      }
      prevSmImgCont.classList.add("active");
    }
  });

  carNext.addEventListener('click', () => {
    let currentImg = thumbnailContainer.querySelector(".active");
    let nextImg = currentImg.nextElementSibling;

    let currSmImgCont = smallImgContainer.querySelector(".active");
    let nextSmImgCont = currSmImgCont.nextElementSibling;

    if (nextImg !== null) {
      for (let el of thumbnailContainer.children) {
        el.classList.remove("active");
      }
      nextImg.classList.add("active");
    }

    if (nextSmImgCont !== null) {
      for (let el of smallImgContainer.children) {
        el.classList.remove("active");
      }
      nextSmImgCont.classList.add("active");
    }
  });

  // Save properties object to local storage before navigating away
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("properties", JSON.stringify(properties));
  })
})