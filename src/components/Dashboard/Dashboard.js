import useAuth from "../../../hooks/useAuth";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import scss from "./dashboard.module.scss";

function Dashboard({ code }) {
  const accessToken = useAuth(code);

  return (
    <div className={scss.dashboard}>
      <Sidebar accessToken={accessToken} />
      <Main />
    </div>
  );
}

export default Dashboard;
