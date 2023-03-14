import React from "react";
import ReactDom from 'react-dom/client'
import searchImages from "./api";
import App from "./App";
const element = document.getElementById('root')

searchImages()

const root = ReactDom.createRoot(element);

root.render(<App/>);