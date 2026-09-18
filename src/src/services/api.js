const API_URL = "/api";

export async function getServices() {
  const response = await fetch(`${API_URL}/services`);

  if (!response.ok) {
    throw new Error("Unable to load services");
  }

  return response.json();
}

export async function submitApplication(data) {
  const response = await fetch(`${API_URL}/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Application submission failed");
  }

  return response.json();
}

export async function trackApplication(id) {
  const response = await fetch(`${API_URL}/applications/${id}/status`);

  if (!response.ok) {
    throw new Error("Unable to find application");
  }

  return response.json();
}