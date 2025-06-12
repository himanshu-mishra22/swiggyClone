import { Outlet } from "react-router";
import ApiCalling from "./components/ApiCalling";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App(){
  return(
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App;



