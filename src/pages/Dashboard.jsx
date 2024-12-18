import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchGithubData = async () => {
    if (!username) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError(null);
    setGithubData(null); 

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setGithubData(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("GitHub user not found. Please check the username.");
      } else {
        setError("Error fetching GitHub data. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem",maxWidth: "600px", margin: "0 auto"}}>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={handleInputChange}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={fetchGithubData} style={{ padding: "10px 15px" }}>
        Fetch Data
      </button>

      {loading && <p style={{ color:"white",fontWeight:"bold"}}>Loading GitHub data...</p>}

      {error && <p style={{ color: "red",fontWeight:"bold" }}>{error}</p>}

      {githubData && !loading && !error && (
        <div style={{ color:"white",fontWeight:"bold"}}>
          <h2>{githubData.login}</h2>
          <p>Username : {githubData.login}</p>
          <p>Public Repos : {githubData.public_repos}</p>
          <p>Followers : {githubData.followers}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;