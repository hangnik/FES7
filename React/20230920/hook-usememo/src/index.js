import React from "react";
import { createRoot } from "react-dom/client";
//import { DarkMode } from "./DarkMode";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
