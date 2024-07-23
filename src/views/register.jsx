import { Link } from "react-router-dom";

export default function register() {
    const Submit = (ev) => {
        ev.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">Create a new account</h1>
                <form onSubmit={Submit}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Pasword" />
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
