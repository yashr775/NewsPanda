import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { name, email, password } = formData;
      console.log(name + " " + email + " " + password);

      const response = await fetch(
        "http://localhost:5000/api/user/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (data.success === true) {
        localStorage.setItem("auth-token", data.token);
        window.location.href = "/news";
      } else {
        console.log("Invalid details");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <form
        className="bg-white opacity-100 w-1/5 h-1/2 rounded-xl"
        onClick={handleFormSubmit}
      >
        <h1 className="from-neutral-950 text-2xl flex justify-center mt-5 mb-5 font-bold underline">
          REGISTER !
        </h1>
        <label className="m-5 pt-5 text-lg">Name :</label>
        <input
          type="text"
          className=" border-2 border-black  m-5 w-5/6 h-10 flex justify-center items-center rounded-lg"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="m-5 pt-5 text-lg">Email :</label>
        <input
          type="text"
          className=" border-2 border-black  m-5 w-5/6 h-10 flex justify-center items-center rounded-lg"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className="m-5 pt-5 text-lg">Password :</label>
        <input
          type="password"
          className=" border-2 border-black  m-5 w-5/6 h-10 flex justify-center items-center rounded-lg"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="bg-blue-800 w-5/6 h-10 text-white ml-5 rounded-lg">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
