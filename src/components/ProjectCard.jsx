function ProjectCard({id,title,description,deleteProject}) {
    return (
        <div className="project-card">

            <h3>{title}</h3>

            <p>{description}</p>

            <button onClick={() => deleteProject(id)}>Delete</button>
        </div>
    );
}

export default ProjectCard;