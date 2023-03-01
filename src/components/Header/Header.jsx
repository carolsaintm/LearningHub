import React from 'react';
import { HorizontalHeader } from '@exxonmobil/react-unity';
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";


function Header (){

  return(   
  <HorizontalHeader className={Styles.horizontal}
    color="surface"
    title="Learning Hub"
    kicker="Energy Products and Trading IT"
  >
    <HorizontalHeader.Nav>
          <Link to="/">
            <HorizontalHeader.Nav.Item active>Home</HorizontalHeader.Nav.Item>
          </Link>
          
          <Link to="/Trading">
            <HorizontalHeader.Nav.Item>Trading</HorizontalHeader.Nav.Item>
          </Link>
          <Link to="/RiskManagement">
            <HorizontalHeader.Nav.Item>Risk Management</HorizontalHeader.Nav.Item>
          </Link>
          <Link to="/Lng">
            <HorizontalHeader.Nav.Item>GGOT LNG</HorizontalHeader.Nav.Item>
          </Link>
          <Link to="/Gas">
            <HorizontalHeader.Nav.Item>GGOT Flowing Gas</HorizontalHeader.Nav.Item>
          </Link>
    </HorizontalHeader.Nav>
  </HorizontalHeader>
  )

}

export default Header;