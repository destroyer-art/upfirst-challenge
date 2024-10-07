import { HomePage } from "./pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PATH } from "./const";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<HomePage />} />
        <Route path={PATH.NOT_FOUND} element={<HomePage />} />
        <Route
          path={PATH.INVALID_URL}
          element={<Navigate to={PATH.NOT_FOUND} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
