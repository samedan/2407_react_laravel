import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { useStateContext } from "./../contexts/useStateContext";

export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useStateContext();

  const Submit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(payload);
    axiosClient
      .postForm("register", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };
  return (
    <div className="login-signup-form animated fadeinDown">
      <div className="form">
        <h1 className="title">Create a new account</h1>
        <form onSubmit={Submit}>
          <input ref={nameRef} type="text" placeholder="Name" />
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Pasword" />
          <button className="btn btn-block">Register</button>
          <p className="message">
            Already registered? <Link to="/login">Login </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
