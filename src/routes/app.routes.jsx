import {Route, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../modules/Home/Home";
import { RiskManagement } from "../modules/RiskManagement";
import { Gas } from "../modules/Gas";
import { Lng } from "../modules/Lng";
import { Trading } from "../modules/Trading";


export default createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>}>
        <Route path="" index element={<Home />} />
        <Route path="RiskManagement" index element={<RiskManagement />} />
        <Route path="Gas" index element={<Gas />} />
        <Route path="Lng" index element={<Lng />} />
        <Route path="Trading" index element={<Trading />} />
        
    </Route>
)