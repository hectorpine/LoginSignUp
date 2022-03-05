import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header"
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>  
          <Route path="/MyAccount" element={<MyAccount />}/>
          <Route path="/MyOrders" element={<MyOrders />}/>
          </Route>
      </Routes>
   
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));