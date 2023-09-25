//This Js file is used to fetch the images that were liked by the user and show them on the favourites tab.

const gallery = document.querySelector("#gallery");

function allStorage() {
  let values = [];
  keys = Object.keys(localStorage);
  i = keys.length;
  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  const getUrls = values.map((i) => {
    return `<div class="gallery-item"><span id= "${i.id}" class="material-icons-outlined" onclick="toggleLiked(id)" style="display: flex; color: red">
    favorite
  </span>
  <img src="${i.urls.small}" alt= "${i.alt_description}" id="${i.id}" ondblclick = "openImg(id)" /> </div>`;
  });
  gallery.innerHTML = getUrls.join("");
}

allStorage();
