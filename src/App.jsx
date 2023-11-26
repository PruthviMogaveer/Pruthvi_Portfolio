import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <div className="fixed">dfav
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
