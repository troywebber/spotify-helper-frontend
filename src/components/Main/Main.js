import scss from "./main.module.scss";
import { useEffect, useState } from "react";

export default function Main() {
  const [gradient, setGradient] = useState(
    "linear-gradient(360deg, rgb(18, 18, 18) 35%, rgb(16, 140, 7))"
  );

  useEffect(() => {
    const randomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setGradient(
        `linear-gradient(360deg, rgb(18,18,18) 35%, rgb(${r}, ${g}, ${b}))`
      );
    };
    randomColor();
  }, []);

  return (
    <div className={scss.mainContainer} style={{ background: gradient }}>
      <h1>This is the main component</h1>
    </div>
  );
}
