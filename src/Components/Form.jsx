import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailFormat = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm;

    const errorsFound = { name: "", email: "" };

    if (!emailFormat.test(data.email)) {
      errorsFound.email = "Use a valid email format";
    }
    if (data.name.length < 5) {
      errorsFound.name = "Name must be al least 5 characters long";
    } else {
      setError({ name: "", email: "" });
      setData({ name: "", email: "" });
      setMessage("Thank you for contacting us, we will be in touch soon");
    }

    setError(errorsFound);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        {error.name && <h5 className="error">{error.name}</h5>}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        {error.email && <h5 className="error">{error.email}</h5>}
        {/* <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea> */}
        <button onClick={handleSubmit}>Send</button>
        {message && <h5 className="success">{message}</h5>}
      </form>
    </div>
  );
};

export default Form;
