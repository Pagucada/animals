import react from "react";
import reactDOM from "react-dom/client";
import App from "./App";

const el = document.querySelector("#root");
const root = reactDOM.createRoot(el);

root.render(<App />);
