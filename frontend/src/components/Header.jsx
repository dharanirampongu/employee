import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm">
      <div className="text-2xl font-bold gradient-text">EmpPortal</div>
      <div className="flex gap-8 text-lg font-medium text-slate-600">
        <NavLink to="" className={({ isActive }) => (isActive ? "text-emerald-600" : "hover:text-emerald-500 transition-colors")}>
          Home
        </NavLink>
        <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-emerald-600" : "hover:text-emerald-500 transition-colors")}>
          Create
        </NavLink>
        <NavLink to="list" className={({ isActive }) => (isActive ? "text-emerald-600" : "hover:text-emerald-500 transition-colors")}>
         List Of Employees
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
