import { useEffect, useState } from "react";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Login from "../../spotify-helper-frontend-main/src/components/Login/Login";

export default function Home() {
  const [code, setCode] = useState<string | null>("");

  //sets the code provided by spotify after login
  useEffect(() => {
    function getCode(): void {
      const code = new URLSearchParams(window.location.search).get("code");
      if (typeof window !== "undefined") {
        setCode(code);
      }
    }
    getCode();
  }, [code]);

  return code ? <Dashboard code={code} /> : <Login />;
}
