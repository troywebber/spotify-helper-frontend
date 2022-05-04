import useAuth from "../../../hooks/useAuth";
import Sidebar from "../Sidebar/Sidebar.js";
import Main from "../Main/Main.js";
import scss from "./dashboard.module.scss";

function Dashboard({ code }) {
  const accessToken = useAuth(code);

  if (!accessToken) {
    return (
      <div className={scss.loading}>
        <p>Please wait for the dashboard to load 🎵</p>
      </div>
    );
  }

  return (
    <div className={scss.dashboard}>
      <Sidebar accessToken={accessToken} />
      <Main accessToken={accessToken} />
    </div>
  );
}

export default Dashboard;
