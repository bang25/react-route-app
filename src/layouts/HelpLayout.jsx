import { Outlet, NavLink } from 'react-router-dom'

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h1>Help</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor labore iusto reprehenderit magni deleniti esse pariatur mollitia, nesciunt amet voluptatibus maxime nostrum. Maxime at ullam eligendi optio est consectetur et.</p>

            <nav className='nav'>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}