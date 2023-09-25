import { useEffect, useState } from "react";

function useScroll() {
  const [isBottom, setIsBottom] = useState(false);

  //  사용자가 스크롤을 할 때 바닥에 닿았는지 알려주기 (바닥에 닿으면 true 반환)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // innerHeight : 뷰포트의 높이
      // scrollTop : 타겟 요소가 화면 상단으로부터 스크롤된 길이
      // offsetHeight : 페이지의 전체 높이

      // 뷰포트의 높이 + 스크롤의 값이 화면 전체의 높이보다 크거나 같다면 바닥에 닿은 것.
      // 모니터마다 scrollTop 값이 다를 수 있기 때문에 안전하게 +5 해줌
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop + 5 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);

  return isBottom;
}

export default useScroll;
