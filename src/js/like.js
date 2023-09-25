function toggleLike(id) {
  const likeBtn = document.getElementById(id);
  if (likeBtn.style.color === "black") {
    likeBtn.style.color = "red";
    storeData(id);
  } else {
    likeBtn.style.color = "black";
    localStorage.removeItem(id);
  }
}

function storeData(id) {
  fetch(
    `https://api.unsplash.com/photos/${id}/?client_id=EtbAtAn46Sox_CWbI0s9ds5N7jBeTydjDoR2C6v01y8`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      localStorage.setItem(id, JSON.stringify(data));
    });
}
