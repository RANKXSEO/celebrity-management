import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Bootstrap v2
const root = document.getElementById('root');
if (root) createRoot(root).render(<App />);
