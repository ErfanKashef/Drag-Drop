let draggedItem = null;
let fromList = null;

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    draggedItem = item;
    fromList = item.parentElement.id;
    setTimeout(() => (item.style.display = "none"), 0);
  });

  item.addEventListener("dragend", (e) => {
    draggedItem.style.display = "flex";
    draggedItem = null;
  });
});

document.querySelectorAll(".dropzone").forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    if (zone.id !== fromList) {
      zone.appendChild(draggedItem);
    }
  });
});
