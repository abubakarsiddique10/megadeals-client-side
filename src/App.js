import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Authentication from "./pages/Authentication/Authentication";
import { publicRoutes } from "./routes/publicRoutes";
import { privetRoute } from "./routes/privetRoute"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {publicRoutes.map(route => <Route path={route.path} element={<route.Component />} />)}

        <Route element={<Authentication />}>
          {privetRoute.map(route => <Route path={route.path} element={<route.Componet />} />)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
