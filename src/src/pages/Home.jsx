import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const [search, setSearch] = useState("");

  const services = [
    {
      title: "Certificate Services",
      description: "Apply for government certificates online."
    },
    {
      title: "Document Services",
      description: "Request and manage digital documents."
    },
    {
      title: "Citizen Complaints",
      description: "Submit and track citizen complaints."
    }
  ];

  const filtered = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <h1>Welcome to E-Governance Portal</h1>
        <p>Access government digital services quickly and conveniently.</p>

        <SearchBar value={search} onChange={setSearch} />
      </section>

      <h2>Popular Services</h2>

      <div className="services-grid">
        {filtered.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
}

export default Home;