import useAuth from "../../../hooks/useAuth";
import Sidebar from "../Sidebar/Sidebar.js";

function Dashboard({ code }) {
  const accessToken = useAuth(code);

  return (
    <>
      <Sidebar accessToken={accessToken} />
    </>
  );
}

export default Dashboard;
