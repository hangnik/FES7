class VendingMachineFunc {
  constructor() {
    // section1 요소 선택
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p");
    this.itemList = vMachine.querySelector(".cola-list");
    this.inputCostEl = vMachine.querySelector("#input-money");
    this.btnPut = vMachine.querySelector("#input-money+.btn");
    this.btnReturn = vMachine.querySelector(".bg-box+.btn");
    this.btnGet = vMachine.querySelector(".btn-get");
    this.stagedList = vMachine.querySelector(".get-list");

    // section2 요소 선택
    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box p");

    // section3 요소 선택
    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list");
    this.txtTotal = getInfo.querySelector(".total-price");
  }

  setUp() {
    this.bindEvents();
  }

  // 장바구니에 선택한 콜라의 목록을 생성
  stagedItemGenerator(target) {
    const stagedItem = document.createElement("li");
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;

    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
        ${target.dataset.item}
        <strong>
            1
            <span class="a11y-hidden">개</span>
        </strong>
        `;

    this.stagedList.append(stagedItem);
  }

  // 이벤트 붙이기
  bindEvents() {
    /* 1. 입금 버튼 기능
        - 소지금 = 소지금 - 입금액
        - 잔액 = 기존의 잔액 + 입금액
        - 입금액이 소지금보다 많으면 "소지금이 부족합니다" 경고창 띄우기
        - 입금액 인풋창은 초기화 하기
    */
    this.btnPut.addEventListener("click", () => {
      const inputCost = parseInt(this.inputCostEl.value); // 사용자 입력값 (input)

      // 소지금과 잔액의 경우 XX,XXX원 형태로 들어있기 때문에 콤마를 제거하고 숫자로 형변환
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 현재 사용자의 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 현재 자판기 잔액

      // input에 입금액을 입력했고, 0보다 크다면
      if (inputCost && inputCost > 0) {
        // 입금액이 소지금보다 적거나 같다면 소지금 = 소지금 - 입금액 / 잔액 = 기존잔액 + 입금액
        if (inputCost <= myMoneyVal) {
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원";
          // inTl 객체를 통해 사용자 국가에서 사용하는 포맷으로 숫자를 변경

          // 맨처음에 balaceVal이 NaN이기 때문에 삼항연산자로 balaceVal이 없을 경우 0으로 처리해줘야 함
          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원";

          // 입금액이 소지금보다 크다면 경고창 띄우기
        } else {
          alert("소지금이 부족합니다.");
        }
        // 입금 후 입급액 input값 초기화
        this.inputCostEl.value = null;
      }
    });

    /* 2. 거스름돈 반환 기능
        - 반환 버튼을 누르면 소지금 === 소지금 + 잔액
        - 잔액은 초기화
    */
    this.btnReturn.addEventListener("click", () => {
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); // 현재 사용자의 소유금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); // 현재 자판기 잔액

      // 잔액이 있다면 소지금에 잔액 추가
      if (balanceVal) {
        this.myMoney.textContent =
          // Intl.NumberFormat : 언어에 맞는 숫자 서식을 지원해줌. 한국의 경우 100단위마다 콤마 추가
          new Intl.NumberFormat().format(myMoneyVal + balanceVal) + "원";

        // 반환 후 잔액 초기화
        this.balance.textContent = null;
      }
    });

    /* 3. 자판기 메뉴 장바구니에 등록하는 기능
        - 메뉴를 선택하면 잔액 = 잔액 - 콜라 가격
        - 콜라 가격보다 잔액이 적다면 "잔액이 부족합니다" 경고창 출력
        - 선택한 콜라가 장바구니에 등록
        - 콜라의 data-count 값을 -1
        - data-count가 0이 되면 품절 표시 => btn에 disabled 속성 붙이기, strong에 soldout 클래스 붙이기
    */
    const colaBtns = this.itemList.querySelectorAll("button");
    // forEach문을 통해 콜라 버튼마다 이벤트 등록해주기
    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener("click", (event) => {
        const balaceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        ); // 현재 자판기 잔액

        const targetElPrice = parseInt(colaBtn.dataset.price); // 선택한 콜라의 가격
        const stagedListItem = this.stagedList.querySelectorAll("li"); // 장바구니에 추가한 콜라 리스트
        let isStaged = false; // 장바구니에 존재하는지 유무 판단

        // 잔액이 콜라 가격보다 많거나 같다면 장바구니에 추가할 수 있음
        if (balaceVal >= targetElPrice) {
          // 잔액 = 잔액 - 콜라 가격
          this.balance.textContent =
            new Intl.NumberFormat().format(balaceVal - targetElPrice) + "원";

          // for..of로 장바구니에 있는 콜라 리스트를 돌면서 선택한 콜라가 장바구니에 있으면 개수만 플러스 해주기
          for (const item of stagedListItem) {
            if (item.dataset.item === colaBtn.dataset.item) {
              // strong 태그의 첫번째 자식 텍스트인 개수에 +1
              const itemText = item.querySelector("strong");
              itemText.firstChild.textContent =
                parseInt(itemText.firstChild.textContent) + 1;
              isStaged = true;
              // if문 조건을 만족한다면 추가해주고 순환 멈추기
              break;
            }
          }

          // 처음으로 선택한 콜라라면 장바구니에 템플릿 코드로 추가해주기
          // 아래 코드보다 먼저 장바구니에 있는 콜라인지 확인하는게 먼저임!! 그래야 isStaged값을 true로 바꾸고 처음 선택한 콜라만 추가해줄 수 있음
          if (!isStaged) {
            this.stagedItemGenerator(colaBtn);
          }

          // 선택한 콜라의 재고(count) -1 해주기
          colaBtn.dataset.count--;

          // 콜라의 재고(count)가 0이라면 품절 표시해주기
          if (parseInt(colaBtn.dataset.count) === 0) {
            colaBtn.disabled = true;
            colaBtn.insertAdjacentHTML(
              "afterbegin",
              '<strong class="soldout">품절</strong>'
            );
          }

          // 잔액이 콜라 가격보다 적다면 경고창 띄우기
        } else {
          alert("잔액이 부족합니다. 돈을 더 입금해주세요.");
        }
      });
    });

    /* 4. 획득 버튼 기능
        - 획득 버튼을 누르면 장바구니에 추가한 음료수 목록이 음료 목록으로 이동
        - 만약 동일한 음료가 이미 있으면 해당 콜라의 data-count만큼 플러스
        - 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트
    */
    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li"); // 장바구니 리스트
      const itemGetList = this.getList.querySelectorAll("li"); // 획득한 음료 리스트
      let totalPrice = 0; // 총 금액

      // 장바구니 아이템을 획득 리스트로 이동하기
      for (const itemStaged of itemStagedList) {
        let isStaged = false;

        // 이중포문을 돌면서 획득한 음료 리스트에 있는지 확인
        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득한 음료 리스트에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            const itemGetText = itemGet.querySelector("strong");
            const itemStagedText = itemStaged.querySelector("strong");
            itemGetText.firstChild.textContent =
              parseInt(itemGetText.firstChild.textContent) +
              parseInt(itemStagedText.firstChild.textContent);
            isStaged = true;
            // 조건을 만족한다면 추가해주고 순환 멈추기
            break;
          }
        }

        // 처음으로 획득한 음료 리스트에 추가하는거라면 그대로 장바구니에서 획득 리스트로 옮겨주기
        if (!isStaged) {
          this.getList.append(itemStaged);
        }
      }

      // 장바구니 목록 초기화
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순환하면서 총 금액 계산
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        // 콜라 가격 * 개수
        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent);
      });
      this.txtTotal.textContent =
        new Intl.NumberFormat().format(totalPrice) + "원";
    });
  }
}

export default VendingMachineFunc;
