import { useState } from "react";
// import "./Form.css";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        course: "",
        year: "",
        gender: "",
        skills: [],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setFormData({
                ...formData,
                skills: [...formData.skills, value],
            });
        } else {
            setFormData({
                ...formData,
                skills: formData.skills.filter((item) => item !== value),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Student Registration</h1>

                <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} />

                <select name="course" onChange={handleChange}>
                    <option value="">Select Course :-</option>
                    <option>BCA</option>
                    <option>B.Tech</option>
                    <option>MCA</option>
                </select>

                <select name="year" onChange={handleChange}>
                    <option value="">Select Year :-</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                </select>

                <div>
                    <h3>Gender :-</h3>

                    <label>
                        <input type="radio"name="gender"value="Male"onChange={handleChange}/>
                        Male
                    </label>

                    <label>
                        <input type="radio"name="gender"value="Female"onChange={handleChange} />
                        Female
                    </label>

                    <label>
                        <input type="radio" name="gender" value="Other" onChange={handleChange} />
                        Other
                    </label>
                </div>

                <div>
                    <h3>Skills :-</h3>

                    <label>
                        <input type="checkbox" value="HTML" onChange={handleCheckbox} />
                        Web Development
                    </label><br/>

                    <label>
                        <input type="checkbox" value="CSS" onChange={handleCheckbox} />
                        Software Development
                    </label><br/>

                    <label>
                        <input type="checkbox" value="JavaScript" onChange={handleCheckbox} />
                        Digital Marketing
                    </label><br/>

                    <label>
                        <input type="checkbox" value="React" onChange={handleCheckbox} />
                        AI
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;