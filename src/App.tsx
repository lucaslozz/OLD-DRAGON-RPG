import { Navigate, Route, Routes } from "react-router-dom";
import { Sidebar, useSidebarState } from "./components/Sidebar";
import { CompendioPage } from "./pages/CompendioPage";
import { HistoriaPage } from "./pages/HistoriaPage";
import { routes } from "./router";

export default function App() {
  const { collapsed, menuActive, toggleCollapsed, toggleMenu } =
    useSidebarState();

  const shellClass = [
    "app-shell",
    collapsed ? "sidebar-collapsed" : "",
    menuActive ? "menu-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={shellClass}>
      <Sidebar
        collapsed={collapsed}
        menuActive={menuActive}
        onToggleCollapsed={toggleCollapsed}
        onToggleMenu={toggleMenu}
      />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to={routes.compendio} replace />} />
          <Route path={routes.compendio} element={<CompendioPage />} />
          <Route path={routes.historia} element={<HistoriaPage />} />
        </Routes>
      </div>
    </div>
  );
}
