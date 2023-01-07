import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="project-item"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})`}} title={name}  className="bg-image" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;