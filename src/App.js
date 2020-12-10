import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/UI/loader/loader";
// import cloneDeep from "lodash.clonedeep";

import Footer from "./components/footer";
import Header from "./components/header";

const HomePage = lazy(() => import("./pages/home/index"));
const RoomPage = lazy(() => import("./pages/rooms/index"));
const ContactPage = lazy(() => import("./pages/contact/index"));
const FacilityPage = lazy(() => import("./pages/facilities/index"));
function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="App">
      <Header scrollTo="#body" />
      <div id="body">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/facilities" exact>
              <FacilityPage />
            </Route>
            <Route path="/rooms" exact>
              <RoomPage />
            </Route>

            <Route path="/contact-us" exact>
              <ContactPage />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
