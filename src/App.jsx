import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <div className="fixed top-0 z-10">
        <Header />
      </div>
      <div className="relative w-full min-h-screen">
        <Outlet />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  );
}

export default App;
