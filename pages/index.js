import { useEffect, useState } from "react";
import Dashboard from "../src/components/Dashboard/Dashboard.js";
import Login from "../src/components/Login/Login.js";

export default function Home() {
  const [code, setCode] = useState("");

  useEffect(() => {
    function getCode() {
      const code = new URLSearchParams(window.location.search).get("code");
      if (typeof window !== "undefined") {
        setCode(code);
      }
    }
    getCode();
  }, [code]);

  return code ? <Dashboard code={code} /> : <Login />;
}
