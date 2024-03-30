async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

function render() {
  let fotoArray = document.getElementById("content");
  fotoArray.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    fotoArray.innerHTML += /*html*/ `
      <img class="foto-box" id="foto-box-${i + 1}" onclick="openFullscreen(${
      i + 1
    })" src="./assets/imgs/${i + 1}.jpg" alt="">
      `;
  }
}

function openFullscreen(index) {
  document.getElementById("fullscreen-bg").classList.remove("d-none");
  let fullscreenFoto = document.getElementById("fullscreen-foto");
  let leftArrow = document.getElementById("leftArrow");
  let rightArrow = document.getElementById("rightArrow");
  fullscreenFoto.innerHTML = /*html*/ `<img class="fullscreen-foto" src="./assets/imgs/${index}.jpg">`;
  leftArrow.innerHTML = showLeftFoto(index);
  rightArrow.innerHTML = showRightFoto(index);
}

function showLeftFoto(index) {
  return /*html*/ `
  <div class="left-arrow-interface no-select" onclick="showFoto(${index - 1})" >
    <img
      class="left-arrow no-select"
      src="/bitfoto/assets/icons/leftArrow.svg"
      alt=""
    />
  </div>
`;
}

function showRightFoto(index) {
  return /*html*/ `
  <div class="right-arrow-interface no-select" onclick="showFoto(${
    index + 1
  })" >
    <img
        class="right-arrow no-select"
        src="/bitfoto/assets/icons/rightArrow.svg"
        alt=""
    />
  </div>
`;
}

function closeFullScreen() {
  document.getElementById("fullscreen-bg").classList.add("d-none");
}

function showFoto(index) {
  if (0 < index && index <= 20) {
    openFullscreen(index);
  }
}
