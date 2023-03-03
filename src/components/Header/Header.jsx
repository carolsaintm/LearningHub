import React from 'react';
import { HorizontalHeader, Badge } from '@exxonmobil/react-unity';
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";


function Header (){

  return(   

<HorizontalHeader className={Styles.horizontal}
    color="main"
    title="Learning Hub"
>
    <HorizontalHeader.Nav className={Styles.nav}>
    <Link to="/">
            <HorizontalHeader.Nav.Item active>Home</HorizontalHeader.Nav.Item>
          </Link>
    <HorizontalHeader.Nav.Dropdown text="Teams" className={Styles.text} >
      <HorizontalHeader.Nav.Dropdown.Item>
      <Link to="/Trading">
            <HorizontalHeader.Nav.Item>Trading</HorizontalHeader.Nav.Item>
          </Link>
      </HorizontalHeader.Nav.Dropdown.Item>
      <HorizontalHeader.Nav.Dropdown.Item>
      <Link to="/RiskManagement">
            <HorizontalHeader.Nav.Item>Risk Management</HorizontalHeader.Nav.Item>
          </Link>
      </HorizontalHeader.Nav.Dropdown.Item>
      <HorizontalHeader.Nav.Dropdown.Item>
      <Link to="/Lng">
            <HorizontalHeader.Nav.Item>GGOT LNG</HorizontalHeader.Nav.Item>
          </Link>
      </HorizontalHeader.Nav.Dropdown.Item>
      <HorizontalHeader.Nav.Dropdown.Item>
      <Link to="/Gas">
            <HorizontalHeader.Nav.Item>GGOT Gas</HorizontalHeader.Nav.Item>
          </Link>
      </HorizontalHeader.Nav.Dropdown.Item>
    </HorizontalHeader.Nav.Dropdown>
    </HorizontalHeader.Nav>
  </HorizontalHeader>




  )

}

export default Header;


