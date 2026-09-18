import React from "react";

function ServiceCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Service</button>
    </div>
  );
}

export default ServiceCard;