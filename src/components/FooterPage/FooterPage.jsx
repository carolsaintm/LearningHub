import { Footer } from '@exxonmobil/react-unity';
import React from 'react';
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";


export default function FooterPage(){

  return(
  <Footer variant="condensed"
  className={Styles.foot}>
    <Link to="https://jam4.sapjam.com/groups/qCopFlEYW0XJKJWvGLpLMI/overview_page/KAVmUAg0pA5Fv1vLDa4SWn">
    <Footer.Link>Energy Products and Trading IT Learning Hub</Footer.Link>
    </Link>

    
    <Link to="">
    <Footer.Link></Footer.Link>
    </Link>
</Footer>)

}

