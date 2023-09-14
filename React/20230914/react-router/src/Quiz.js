import React from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Products() {
  const { id } = useParams();
  return <h2>Products {id}번</h2>;
}

function ProductsNotice() {
  const { id } = useParams();
  return <h2>{id}번 상품 상세 알림 페이지</h2>;
}

function Cart() {
  return <h2>Cart</h2>;
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Outlet />
    </div>
  );
}

function CouponPage() {
  return <h2>Coupon</h2>;
}

function QuestionPage() {
  return <h2>Question</h2>;
}

function NoticePage() {
  return <h2>Notice</h2>;
}

function Button() {
  // useNavigate : 해당 주소로 이동하게 해주는 훅
  const navigate = useNavigate();
  return <button onClick={() => navigate("/users")}>유저보기</button>;
}

export default function Quiz() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products/1">Products 1</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/notice" element={<ProductsNotice />} />
        <Route path="/cart" element={<Cart />} />
        {/* Oulet은 자식으로 있는 컴포넌트를 꺼내서 보여줌 */}
        {/* <Route path="/users/*" element={<Outlet />}> */}
        <Route path="/users" element={<Users />}>
          <Route path="coupon" element={<CouponPage />} />
          <Route path="question" element={<QuestionPage />} />
          <Route path="notice" element={<NoticePage />} />
        </Route>
      </Routes>
      <Button />
    </BrowserRouter>
  );
}
