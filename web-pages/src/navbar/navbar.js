import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="title">Perfect Recipe</Link>
        <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to="/login">Login</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
        </ul>
    </nav>
}

