import "./App.css";
import Maindash from "./components/MainDash/Maindash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Maindash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
