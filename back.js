function backScript() {
  function refresh() {
    location.reload();
  }

  document.querySelector(".back-btn").addEventListener("click", refresh);
}

export default backScript;
