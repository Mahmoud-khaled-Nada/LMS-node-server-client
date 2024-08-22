import { createRoot } from "react-dom/client";
import "@/css/index.css";
import "@/css/tailwind.output.css";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root")! as HTMLBRElement);

root.render(<App />);
