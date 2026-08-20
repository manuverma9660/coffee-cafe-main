import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert("Form submit successful");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Registration Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f6f9"
  },
  formBox: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    width: "350px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default App;