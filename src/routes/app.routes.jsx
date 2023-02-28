import {Route, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../modules/Home/Home";
import { RiskManagement } from "../modules/RiskManagement";
import { GGOTGas } from "../modules/GGOTGas";
import { GGOTlng } from "../modules/GGOTlng";
import { Trading } from "../modules/Trading";


export default createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>}>
        <Route path="" index element={<Home/>} />
        <Route path="" index element={<RiskManagement/>} />
        <Route path="" index element={<GGOTGas/>} />
        <Route path="" index element={<GGOTlng/>} />
        <Route path="" index element={<Trading/>} />
        
    </Route>
)