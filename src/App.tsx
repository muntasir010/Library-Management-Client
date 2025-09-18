import { Outlet } from "react-router";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="bg-[#081829]">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
