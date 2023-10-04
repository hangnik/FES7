import IncomeInput from "./containers/IncomeInput/IncomeInput";
import ExpenseInput from "./containers/ExpenseInput/ExpenseInput";
import ExpenseList from "./containers/ExpenseList/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal/ExpenseTotal";

function App() {
  return (
    <article>
      <header>
        {/* 사용자의 한달 수입액을 입력 */}
        <IncomeInput />
      </header>
      <main>
        {/* 사용자가 구입한 상품의 이름과 가격을 입력 */}
        지출 input
        <ExpenseInput />
        <div>
          {/* 사용자가 그동안 구입한 상품 목록 */}
          지출 기록
          <ExpenseList />
          <div>
            {/* 사용자가 구입한 상품 지출액의 총합 */}
            지출 총합
            <ExpenseTotal />
          </div>
        </div>
      </main>
    </article>
  );
}
export default App;
