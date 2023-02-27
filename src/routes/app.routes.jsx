import {Route, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../modules/Home/Home";

export default createRoutesFromElements(
    <Route path="/" element={<BaseLayout/>}>
        <Route path="" index element={<Home/>} />
        
    </Route>
)