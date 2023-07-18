import { lazy } from "react";
import { Route } from "react-router-dom";


const HomeView = lazy(() => import("./homeView"));
const ProductView = lazy(() => import("./product"));
const ProductsView = lazy(() => import("./products"));
const FilteredProductsView = lazy(() => import("./filteredProducts"));
const SearchedProductsView = lazy(() => import("./searchedProducts"));
const ContactUs = lazy(() => import("./contactUs"));

export default [
  <Route path="/" element={<HomeView />} key="mainRoute" />,
  <Route path="/Contact-us/:ContactUs" element={<ContactUs />} key="mainRoute" />,
  <Route path="/product/:category/:title/:id" element={<ProductView />} key="mainRoute" />,
  <Route path="/Products/:shop" element={<ProductsView />} key="mainRoute" />,
  <Route path="/FilteredProducts/:shop/:min/:max" element={<FilteredProductsView />} key="mainRoute" />,
  <Route path="/SearchedProducts/:value" element={<SearchedProductsView />} key="mainRoute" />
];
