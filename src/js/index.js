const gallery = document.querySelector("#gallery");

fetch(
  "https://api.unsplash.com/photos/?page=1&per_page=28&client_id=EtbAtAn46Sox_CWbI0s9ds5N7jBeTydjDoR2C6v01y8"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const photos = data;
    const getUrls = photos.map((i) => {
      return `<div class="gallery-item"><span id= "${i.id}" class="material-icons-outlined" onclick="toggleLike(id)" style="display: flex">
      favorite
    </span>
    <img src="${i.urls.small}" alt= "${i.alt_description}" id="${i.id}" ondblclick = "openImg(id)"/> </div>`;
    });
    gallery.innerHTML = getUrls.join("");
  });
