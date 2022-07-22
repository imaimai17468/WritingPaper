import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Convert from "./pages/Convert";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/convert/`} element={<Convert />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;