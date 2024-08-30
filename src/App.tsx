import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/main-layout/main-layout";
import Home from "./pages/home/home";
import ProductDetail from "./pages/product-detail/product-detail";
import PurchaseOverview from "./pages/purchase-overview/purchase-overview";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/product/:name", element: <ProductDetail /> },
  { path: "/purchase-overview", element: <PurchaseOverview /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<MainLayout>{element}</MainLayout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
