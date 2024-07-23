import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
    const { token } = useStateContext();

    if (token) {
        console.log("token GuestLayout");
        <Navigate to="/" />;
    } else {
        console.log("no token GuestLayout");
        return (
            <div>
                {/* <p>Guest</p> */}
                <Outlet />
            </div>
        );
    }
}
