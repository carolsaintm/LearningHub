import './App.css';
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Loader, ThemeProvider, unityTheme } from "@exxonmobil/react-unity";
import theme from "./theme";
const customTheme = {
  ...unityTheme,
  ...theme,
};



function App() {
  return (
    <ThemeProvider theme={customTheme}>
    <RouterProvider router={routes} fallbackElement={<Loader />} />
  </ThemeProvider>
  );
}

export default App;
