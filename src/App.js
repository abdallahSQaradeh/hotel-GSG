import "./App.css";
import { lazy, Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/UI/loader/loader";
import E404 from "./components/e404";
// import cloneDeep from "lodash.clonedeep";

import Footer from "./components/footer";
import Header from "./components/header";

const HomePage = lazy(() => import("./pages/home/index"));
const RoomPage = lazy(() => import("./pages/rooms/index"));
const ContactPage = lazy(() => import("./pages/contact/index"));
const FacilityPage = lazy(() => import("./pages/facilities/index"));
function App() {
  const [show, setShow] = useState(null);
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="App">
      {show ? <Header scrollTo="#body" /> : null}
      <div id="body">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/facilities" exact>
              <FacilityPage setHeader={() => setShow(true)} />
            </Route>
            <Route path="/rooms" exact>
              <RoomPage setHeader={() => setShow(true)} />
            </Route>

            <Route path="/contact-us" exact>
              <ContactPage setHeader={() => setShow(true)} />
            </Route>
            <Route path="/" exact>
              <HomePage setHeader={() => setShow(true)} />
            </Route>
            <Route>
              <E404 setHeader={() => setShow(false)} />
            </Route>
          </Switch>
        </Suspense>
      </div>
      {show ? <Footer /> : null}
    </div>
  );
}

export default App;
