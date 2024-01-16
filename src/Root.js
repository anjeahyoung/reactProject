import { HashRouter } from "react-router-dom";
import App from "./App.js";

function Root() {
  return (
    <>
      <HashRouter>
        <App />
      </HashRouter>
    </>
  );
}

export default Root;
