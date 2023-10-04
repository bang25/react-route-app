import { NavLink, Outlet, Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <nav className="nav-bar">
                <div className="title">
                <Link to="/"><h2>Jobstreet</h2></Link>
                </div>

                <div className="nav-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Contact</NavLink>
                <NavLink to="careers">Careers</NavLink>
                </div>
            </nav>
            <Breadcrumbs />

            <main>
                <Outlet />
            </main>
        </div>
    )
}