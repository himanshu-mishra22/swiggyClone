import { Outlet } from "react-router";
import ApiCalling from "./components/ApiCalling";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import appStore from "./store/appStore";
import {Provider} from "react-redux"

function App() {
  //to use the redux to all the component we will use provider to wrap it in app.jsx
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
