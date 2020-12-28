import React from "react";
import {Footer} from "./Footer";
import { Header } from "./Header";


export const Layout = ({ children, ...rest }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);
