import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <nav className="nav-bar">
                <div className="title">
                <h2>Jobstreet</h2>
                </div>

                <div className="nav-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Contact</NavLink>
                <NavLink to="careers">Careers</NavLink>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}