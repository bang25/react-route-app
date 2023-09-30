import { useEffect, useState } from "react"

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
                <div className="career" key={career.id}>
                    <h2>{career.title}</h2>
                    <p>{career.location}</p>
                    <p>{career.salary}</p>
                </div>
            ))}
        </div>

    )
}