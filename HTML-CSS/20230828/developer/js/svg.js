const path = document.querySelector("#path");
const openBtn = document.querySelector(".btn-open");

// path의 전체 길이
const pathLength = path.getTotalLength();

// path의 길이와 공백
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서부터 그릴지
path.style.strokeDashoffset = pathLength;

// 스크롤 이벤트 함수
function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이 (전체 길이)
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤의 위치 => %로 변경 (0 ~ 1 값을 가짐)
  // 전체 스크롤 영역 높이에서 뷰포트 높이만큼 빼줌 -> 실질적으로 scroll이 움직이는 길이
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

  // pathLength -> 0 으로 변경되어야 함
  const drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절
  openBtn.style.opacity = scrollPercentage;

  // 스크롤이 80% 넘어가야 버튼 활성화
  if (scrollPercentage > 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}

window.addEventListener("scroll", scrollHandler);
