import { HashRouter } from "react-router-dom";
import App from "./App.js";
import { RecoilRoot } from "recoil";

function Root() {
  return (
    <>
      <RecoilRoot>
        <HashRouter>
          <App />
        </HashRouter>
      </RecoilRoot>
    </>
  );
}

export default Root;
