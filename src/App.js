import "./App.css";
// import HomePage from "./pages/home/index";
// import cloneDeep from "lodash.clonedeep";
// import FacilityPage from "./pages/facilities/index";
import RoomPage from "./pages/rooms/index";
// import ContactPage from "./pages/contact/index";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <FacilityPage /> */}
      <RoomPage />
      {/* <ContactPage /> */}
    </div>
  );
}

export default App;
