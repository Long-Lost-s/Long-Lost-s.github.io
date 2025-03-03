import { NavLink } from "react-router";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}