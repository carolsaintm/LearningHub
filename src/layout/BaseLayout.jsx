import React from "react";
import { Page } from "@exxonmobil/react-unity";
import { Header } from '../components/Header';
import { FooterPage } from "../components/FooterPage";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Body>
        <Outlet />
      </Page.Body>
      <Page.Footer>
        <FooterPage/>
      </Page.Footer>
    </Page>
  );
};

export default BaseLayout;