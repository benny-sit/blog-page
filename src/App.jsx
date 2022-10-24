import { useState } from "react";
import Feed from "./components/Feed";
import MoreInfo from "./components/MoreInfo";
import NavBlog from "./components/Nav";
import SideBar from "./components/SideNav/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center relative h-screen overflow-hidden">
      <NavBlog />
      <div className="xl:container mx-auto flex grow justify-between overflow-y-auto z-0">
        <SideBar />
        <Feed />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;
