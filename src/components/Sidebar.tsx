import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../router";

const navItems = [
  { to: routes.compendio, label: "Compêndio", icon: "menu_book" },
  { to: routes.historia, label: "História", icon: "auto_stories" },
] as const;

function linkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? "nav-link nav-link-active" : "nav-link";
}

interface SidebarProps {
  collapsed: boolean;
  menuActive: boolean;
  onToggleCollapsed: () => void;
  onToggleMenu: () => void;
}

export function Sidebar({
  collapsed,
  menuActive,
  onToggleCollapsed,
  onToggleMenu,
}: SidebarProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        sidebar.style.height = "calc(100vh - 32px)";
        return;
      }
      sidebar.style.height = menuActive
        ? `${sidebar.scrollHeight}px`
        : "56px";
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [menuActive, collapsed]);

  const sidebarClass = [
    "sidebar",
    collapsed ? "collapsed" : "",
    menuActive ? "menu-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside ref={sidebarRef} className={sidebarClass}>
      <header className="sidebar-header">
        <NavLink to={routes.compendio} className="header-logo" title="Old Dragon 2">
          <span className="header-logo-mark">OD</span>
        </NavLink>
        <button
          type="button"
          className="toggler sidebar-toggler"
          aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          onClick={onToggleCollapsed}
        >
          <span className="material-symbols-rounded" aria-hidden>
            chevron_left
          </span>
        </button>
        <button
          type="button"
          className="toggler menu-toggler"
          aria-label={menuActive ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuActive}
          onClick={onToggleMenu}
        >
          <span className="material-symbols-rounded" aria-hidden>
            {menuActive ? "close" : "menu"}
          </span>
        </button>
      </header>

      <nav className="sidebar-nav" aria-label="Navegação principal">
        <ul className="nav-list primary-nav">
          {navItems.map((item) => (
            <li key={item.to} className="nav-item">
              <NavLink to={item.to} className={linkClassName} end>
                <span className="nav-icon material-symbols-rounded" aria-hidden>
                  {item.icon}
                </span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
              <span className="nav-tooltip">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export function useSidebarState() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  const toggleMenu = () => setMenuActive((prev) => !prev);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuActive(false);
      } else {
        setCollapsed(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { collapsed, menuActive, toggleCollapsed, toggleMenu };
}
