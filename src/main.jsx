import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const Main = (
  <React.StrictMode>
  <App />
</React.StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  ReactDOM.createRoot(rootElement).hydrate(Main);
} else {
  ReactDOM.createRoot(rootElement).render(Main);
}