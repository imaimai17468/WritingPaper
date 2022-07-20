import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Convert from "./pages/Convert";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/convert/`} element={<Convert />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;