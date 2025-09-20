import { Outlet } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#081829] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
