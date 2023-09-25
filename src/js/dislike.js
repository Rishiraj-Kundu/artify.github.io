function toggleLiked(id) {
  const likeBtn = document.getElementById(id);
  if (likeBtn.style.color === "red") {
    likeBtn.remove();
    localStorage.removeItem(id);
  }
}
