import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Careers() {
    const [careers, setCareers] = useState([])

    useEffect(() => {
        fetch('./data/db.json')
        .then(res => res.json())
        .then(data => {
            setCareers(data.careers)
        })
    }, [])


    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={`/careers/${career.title}`} className="career" key={career.id}>
                    <h2>{career.title}</h2>
                    <p>{career.location}</p>
                </Link>
            ))}
        </div>

    )
}