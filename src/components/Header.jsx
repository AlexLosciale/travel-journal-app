import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            TRAVEL DIARY
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  end
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-semibold" : "")
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-semibold" : "")
                  }
                  to="/form"
                >
                  Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
