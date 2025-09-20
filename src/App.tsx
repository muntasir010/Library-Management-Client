import { Outlet } from "react-router";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#081829] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
