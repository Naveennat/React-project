import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./style.css"
export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="site-title">
        Banking
      </Link>
      <ul>
        <CustomLink to="/card">Cards</CustomLink>
        <CustomLink to="/pricing">Transaction</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}