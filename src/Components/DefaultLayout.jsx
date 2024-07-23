import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    function onLogout() {
        console.log("logout");
    }

    if (!token) {
        console.log("no token DefaultLayout");
        <Navigate to="/login" />;
    } else {
        console.log("token DefaultLayout");
        return (
            <div id="defaultLayout">
                <div className="content">
                    <header>
                        <div>Header</div>
                        <div>
                            {user.name}
                            <a
                                href=""
                                onClick={onLogout}
                                className="btn-logout"
                            >
                                Logout
                            </a>
                        </div>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        );
    }
}
