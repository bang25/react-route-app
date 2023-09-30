import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <h1>Careers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic minus nihil, non autem dolores facilis omnis soluta dicta dignissimos, voluptatum accusamus veniam aspernatur dolorum! Nulla fuga voluptate obcaecati porro.</p>

            <main>
                <Outlet />
            </main>
        </div>
    )  
}