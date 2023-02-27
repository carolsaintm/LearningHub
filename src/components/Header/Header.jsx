import React from 'react';
import { HorizontalHeader } from '@exxonmobil/react-unity';

function Header (){

  return(   <HorizontalHeader

    title="Learning Hub"
    kicker="Energy Products and Trading IT"
  >
    <HorizontalHeader.Nav>
      <HorizontalHeader.Nav.Item active>Home</HorizontalHeader.Nav.Item>
      <HorizontalHeader.Nav.Item>Trading</HorizontalHeader.Nav.Item>
      <HorizontalHeader.Nav.Item>Risk Management</HorizontalHeader.Nav.Item>
      <HorizontalHeader.Nav.Item>GGOT LNG</HorizontalHeader.Nav.Item>
      <HorizontalHeader.Nav.Item>GGOT Flowing Gas</HorizontalHeader.Nav.Item>
    </HorizontalHeader.Nav>
  </HorizontalHeader>)

}

export default Header;