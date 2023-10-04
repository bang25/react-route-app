import { Fragment, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

export default function CareerDetails() {
    const { id } = useParams();
    const [career, setCareer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5173/data/db.json'); // Coba fetch data
                if (!response.ok) {
                    throw new Error('Gagal mengambil data');
                }
                const data = await response.json();
                const foundCareer = data.careers.find((career) => career.title === id);
                if (foundCareer) {
                    setCareer(foundCareer);
                } else {
                    setError('Karier tidak ditemukan');
                }
            } catch (error) {
                setError('Terjadi kesalahan saat mengambil data');
            }
        }

        fetchData();
    }, [id]);

    if (error) {
        return <div className="career-details">{error}</div>;
    }

    if (!career) {
        return <div className="career-details">Sedang memuat...</div>;
    }

    return (
        <Fragment>
            <div className="career-details">
                <h3>{career.title}</h3>
                <p>Location : {career.location}</p>
                <p>Salary : {career.salary}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex atque sequi aut non ad?</p>
            </div>
            <Link to={"/careers"} className="backButton">Back</Link>
        </Fragment>
    );
}
