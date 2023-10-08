import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navber = () => {
  return (
    <div className="flex justify-between items-center px-5 py-4 shadow-lg ">

        <Logo></Logo>
      <nav className="flex justify-between items-center gap-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[red] text-xl font-bold" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[red] text-xl font-bold" : ""
          }
        >
          LogIn
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[red] text-xl font-bold" : ""
          }
        >
          Register
        </NavLink>

        <button
          className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Button
        </button>
      </nav>
    </div>
  );
};

export default Navber;
