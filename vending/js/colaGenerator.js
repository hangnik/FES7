class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".sell-list-ul");
  }

  async setUp() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

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

  colaFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `<button class="cola-btn on">
                        <img src="./img/cola-original.png" alt="오리지널 콜라">
                        <span class="cola-name">Original_Cola</span>
                        <strong class="cola-price">1000원</strong>
                    </button>`;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

const colaGenerator = new ColaGenerator();
colaGenerator.loadData();

// colaGenerator class 하나만 밖으로 빼줌
export default ColaGenerator;
