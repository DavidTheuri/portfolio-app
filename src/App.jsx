import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description of the project"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another project"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== id);

      setProjects(updatedProjects);
    
  };

  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="app">

      <h1 className="title">
        Personal Project Showcase App
      </h1>

      <AddProjectForm addProject={addProject}/>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          deleteProject={deleteProject}
        />
      ))}
    </div>
  );
}

export default App;