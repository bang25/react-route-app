import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()
    const pathParts = decodeURIComponent(location.pathname).split('/').filter(link => link !== '')

    let currentLink = ''

    const links = pathParts.map((link) => {
        currentLink += `/${link}`

        return (
            <div className="crumb" key={link}>
                {/* Gunakan currentLink yang sesuai di sini */}
                    <Link to={currentLink}>{link}</Link>
            </div>
        )
    })

    return (
        <div className="breadcrumbs">
            {links}
        </div>
    )
}
