const dropTarget = document.querySelector(".drop-target");
const dropItems = document.querySelectorAll(".drag-item");

dropItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

function handleDragOver(e) {
  e.preventDefault();

  const draggingItem = dropTarget.querySelector(".dragging"); // 드래그 하고 있는 요소
  const notDraggingItem = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  ); // 드래그 안하고 있는 요소들

  const nextItem = notDraggingItem.find((item) => {
    // console.log(e.clientY); // 뷰포트 내 마우스 Y좌표
    // console.log(item.offsetTop); // 뷰포트에서 요소까지의 Y좌표
    // console.log(item.offsetHeight); // 요소의 height 값 (border 포함)

    // offsetTop과 offsetHeight를 2로 나눈 값보다 clientY 값이 작은 item 반환
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragOver);
// dropTarget.addEventListener("dragenter", (e) => e.preventDefault());
