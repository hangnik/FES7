import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["max-width"]}>
        <h1>
          <Link to="/">
            <img src={logo} alt="두근두근 비밀일기" />
          </Link>
        </h1>
        <Link to="./signup" className={"btn-join"}>
          회원가입
        </Link>
      </div>
    </header>
  );
}
