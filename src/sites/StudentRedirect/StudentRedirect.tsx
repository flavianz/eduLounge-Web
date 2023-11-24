import { Navigate } from "react-router";

export default function StudentRedirect() {
    return <Navigate to={"/students/dashboard"} />;
}
