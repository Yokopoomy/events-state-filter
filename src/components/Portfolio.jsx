import {useState} from 'react';
import ProjectList from "./ProjectList.jsx";
import Toolbar from "./Toolbar.jsx";
import ProjectData from "./ProjectData.jsx";

const Portfolio = () => {
    const [projects, setProjects] = useState(ProjectData);
    const [currentFilter, setCurrentFilter] = useState("All")

    const rawFilters = ProjectData.map((project)=>{
        return project.category
    });
    const filters = ["All",...new Set(rawFilters)];

    const filterProjects = ((category) => {
        if (category === "All") {
            setProjects(ProjectData)
            setCurrentFilter("All")
            return;
        }
        const filteredData = ProjectData.filter((project) => {
            return project.category === category;
        })
        setProjects((filteredData))
        setCurrentFilter(category)
    })

    return (
        <div className="">
            <Toolbar
                filters={filters}
                selected={currentFilter}
                onSelectFilter={filterProjects}
            />
            <ProjectList projects={projects} />
        </div>
    );
};

export default Portfolio;