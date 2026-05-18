import { useState } from "react";

function AddProjectForm({ addProject }) {

    const [title, setTitle] = useState("");
    const [description, setDescription]=useState("");

    const handleSubmit = (event) => {event.preventDefault();

        if (
            title.trim() === "" ||
            description.trim === ""
        ) {
            return;
        }

        const newProject = {
            id: Date.now(),
            title: title,
            description: description
        };

        addProject(newProject);

        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}> 

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>

            <button type="submit">
                Add Project
            </button>
        </form>
    );
}

export default AddProjectForm;