import React from "react";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section>
      <h2>Government Services</h2>

      <div className="services-grid">
        <ServiceCard
          title="Birth Certificate"
          description="Apply for a birth certificate."
        />

        <ServiceCard
          title="Income Certificate"
          description="Apply for an income certificate."
        />

        <ServiceCard
          title="Residence Certificate"
          description="Apply for a residence certificate."
        />

        <ServiceCard
          title="Document Request"
          description="Request government documents."
        />

        <ServiceCard
          title="Citizen Complaint"
          description="Submit a complaint online."
        />

        <ServiceCard
          title="Application Tracking"
          description="Track your application status."
        />
      </div>
    </section>
  );
}

export default Services;