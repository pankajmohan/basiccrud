import "./styles.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Navbar from "./components/Navbar";
import Showalldata from "./components/Showalldata";
import Addnew from "./components/Addnew";
import UpdateRecord from "./components/UpdateRecord";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  );
}

function Content() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected Component={Home} />} />
        <Route
          path="/showdata"
          element={<Protected Component={Showalldata} />}
        />
        <Route path="/addrecord" element={<Protected Component={Addnew} />} />
        <Route
          path="/updaterecord"
          element={<Protected Component={UpdateRecord} />}
        />
      </Routes>
    </>
  );
}

export default App;
