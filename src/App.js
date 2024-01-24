import {
  Navigate,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";
import classNames from "classnames";

function App() {
  const location = useLocation();
  return (
    <>
      <header className="flex">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "p-5 hover:text-red-500",
              { "text-red-500": isActive },
              { "text-gray-500": !isActive }
            )
          }
          to="/list"
        >
          리스트
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            classNames(
              "p-5 hover:text-red-500",
              { "text-red-500": isActive },
              { "text-gray-500": !isActive }
            )
          }
          to="/write"
        >
          작성
        </NavLink>
      </header>
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/list" />} />
      </Routes>
    </>
  );
}

export default App;
