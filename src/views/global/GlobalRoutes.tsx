import { lazy } from "react";
import { Route } from "react-router-dom";


const HomeView = lazy(() => import("./homeView"));
const ProductView = lazy(() => import("./product"));
const ProductsView = lazy(() => import("./products"));
const SearchedProductsView = lazy(() => import("./searchedProducts"));
const ContactUs = lazy(() => import("./contactUs"));

export default [
  <Route path="/" element={<HomeView />} key="mainRoute" />,
  <Route path="/Contact-us" element={<ContactUs />} key="mainRoute" />,
  <Route path="/product/:id" element={<ProductView />} key="mainRoute" />,
  <Route path="/Products" element={<ProductsView />} key="mainRoute" />,
  <Route path="/SearchedProducts/:value" element={<SearchedProductsView />} key="mainRoute" />
];
