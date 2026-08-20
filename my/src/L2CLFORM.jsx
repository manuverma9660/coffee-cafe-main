import { useState } from "react";
import{useNavigate} from "react-router-dom";

function L2clCdcForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        address: "",
    });

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData,[name]: value,});
  };

  // Checkbox Change
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({...formData,courses: [...formData.courses, value],});
    } 
    else 
    {
      setFormData({...formData,courses: formData.courses.filter((course) => course !== value),});
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/data", {
        state: formData,
    });
    // console.log(formData);

    // alert("Form Submitted Successfully!");

    // setFormData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   gender: "",
    //   courses: [],
    //   address: "",
    // });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <label>Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br />

        <label>Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br />

        <label>Password :</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br />

        <label>Gender :</label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />

        <label>Courses :</label>

        <label>
          <input
            type="checkbox"
            value="Web Development"
            checked={formData.courses.includes("Web Development")}
            onChange={handleCheckbox}
          />
          Web Development
        </label>

        <label>
          <input
            type="checkbox"
            value="Software Development"
            checked={formData.courses.includes("Software Development")}
            onChange={handleCheckbox}
          />
          Software Development
        </label>

        <label>
          <input
            type="checkbox"
            value="BCA"
            checked={formData.courses.includes("BCA")}
            onChange={handleCheckbox}
          />
          BCA
        </label>

        <br />

        <label>Address :</label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default L2clCdcForm;