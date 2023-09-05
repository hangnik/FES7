class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".cola-list");
  }

  // 콜라 객체를 초기화
  async setUp() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  // 콜라 관련 데이터 로드
  async loadData() {
    try {
      const response = await fetch("./items.json");

      if (!response.ok) {
        throw new Error("HTTP ERROR!!: " + response.status);
      }
      return await response.json();
    } catch (error) {
      console.error("콜라데이터를 로딩하는 중에 문제가 생겼습니다.: " + error);
    }
  }

  // 콜라 종류 템플릿 코드
  colaFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
        <button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
            <img src="./img/${el.img}" alt="${el.name}" />
            <span class="cola-name">${el.name}</span>
            <strong class="cola-price">${el.cost}원</strong>
        </button>
        `;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });

    this.itemList.append(docFrag);
  }
}

// colaGenerator class 하나만 밖으로 빼줌
export default ColaGenerator;
