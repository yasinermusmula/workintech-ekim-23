import { Switch, Route } from "react-router-dom";
import AnaSayfa from "../pages/AnaSayfa";
import ProductPage from "../pages/ProductPage";
import SayacSayfa from "../pages/SayacSayfa";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductEditPage from "../pages/ProductEditPage";

const PageBody = ({ PI }) => {
  return (
    <div className="page-body">
      <Switch>
        <Route path="/" exact>
          <AnaSayfa />
        </Route>
        <Route path="/sayac">
          <SayacSayfa PI={PI} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/products" exact>
          <ProductPage />
        </Route>
        <Route path="/products/create" exact>
          <ProductCreatePage />
        </Route>
        <Route path="/products/detail/:productId" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/products/edit/:productId" exact>
          <ProductEditPage />
        </Route>
        <Route path="*">
          <h2 className="error-box">404 - Sayfa Bulunamadı</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default PageBody;
