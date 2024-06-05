import {Navigate, Outlet} from "react-router-dom";

type ProtectedRouteProps = {
    user:string | undefined
}

function ProtectedRoute(props: ProtectedRouteProps) {
    const user = props.user !== undefined && props.user !== "anonym";

    return (
        user ? <Outlet/> : <Navigate to={"/Login"}/>
    );
}

export default ProtectedRoute;