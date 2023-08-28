const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");

/* 포커스 가능한 속성들 */
const focusableEl = modal.querySelectorAll("a, button");
const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1]; // NodeList는 음수값 못찾음

function openModal() {
  modal.classList.add("active");
  document.documentElement.style.overflow = "hidden"; // 스크롤 감춤
}

function closeModal() {
  modal.classList.remove("active");
  document.documentElement.style.overflow = "auto"; // 스크롤 가능
}

/* 접근성을 고려한 포커스 조절 */
function handleTap(e) {
  //console.log(e.key); // 누른 key 정보를 반환
  //console.log(e.shiftKey); // shift키 눌렀는지 안눌렀는지 불리언 값 반환
  const activeEl = document.activeElement; // 현재 포커스를 받고 있는 요소 반환

  if (e.key === "Tab") {
    if (e.shiftKey) {
      // tab + shift
      if (activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      // tab만
      if (activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
}

btnOpen.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

firstEl.addEventListener("keydown", handleTap);
lastEl.addEventListener("keydown", handleTap);

// ESC 눌렀을 때 모달 닫기
window.addEventListener("keydown", (e) => {
  if (modal.classList.contains("active") && e.key === "Escape") {
    closeModal();
  }
});
