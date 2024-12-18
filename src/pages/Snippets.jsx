import React, { useState } from "react";

const Snippets = () => {
  const [snippets, setSnippets] = useState(
    JSON.parse(localStorage.getItem("snippets")) || []
  );
  const [newSnippet, setNewSnippet] = useState("");

  const addSnippet = () => {
    if (!newSnippet.trim()) return;
    const updatedSnippets = [...snippets, newSnippet];
    setSnippets(updatedSnippets);
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
    setNewSnippet("");
  };
 
  const deleteSnippet = (index) => {
    const updatedSnippets = snippets.filter((_, i) => i !== index);
    setSnippets(updatedSnippets); 
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Code Snippets</h1>
      <textarea
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          resize: "none",
          marginBottom: "1rem",
          minHeight: "150px",
        }}
        value={newSnippet}
        onChange={(e) => setNewSnippet(e.target.value)}
        placeholder="Paste your snippet here"
      />
      <div>
        <button
          onClick={addSnippet}
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Add Snippet
        </button>
      </div>

      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
        {snippets.map((snippet, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              borderRadius: "4px",
              marginBottom: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 1)",
              width: "100%",
            }}
          >
            <pre
              style={{
                backgroundColor: "#2e2e2e",
                color: "#fff",
                padding: "1rem",
                borderRadius: "4px",
                width:"96%",
                overflowX: "auto",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              {snippet}
            </pre>
            <button
              onClick={() => deleteSnippet(index)}
              style={{
                padding: "0.4rem 1rem",
                backgroundColor: "#F44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Snippets;