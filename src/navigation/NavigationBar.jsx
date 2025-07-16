import { NavLink } from "react-router";

export default function NavigationBar() {
  return <nav className="bg-teal-600 h-15 flex justify-around items-center">
    <div className="w-[30%] text-4xl">Logo</div>
    <div className="w-[60%] flex justify-around text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/celebrity">Celebrities</NavLink>
    </div>
  </nav>;
}
