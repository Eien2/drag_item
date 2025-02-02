function dragScript() {
  document.body.innerHTML = `
    <div class="drag">Drag Me</div>
  `;
  const dragEl = document.querySelector(".drag"); 
  let isDrag = false;

  function dragUp(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    dragEl.style.position = "absolute";
    dragEl.style.left = `${mouseX - 15}px`;
    dragEl.style.top = `${mouseY - 15}px`;
  }

  function toggleDrag() {
    if (!isDrag) {
      dragEl.style.background = "rgba(0, 80, 205, 1)";
      document.addEventListener("mousemove", dragUp);
      isDrag = true;
    } else {
      dragEl.style.background = "rgba(0, 100, 200, 0.75)";
      document.removeEventListener("mousemove", dragUp);
      isDrag = false;
    }
  }

  dragEl.addEventListener("click", toggleDrag);
}

export default dragScript;
