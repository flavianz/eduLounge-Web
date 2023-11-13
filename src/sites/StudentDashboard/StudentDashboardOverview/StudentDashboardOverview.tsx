import "./StudentDashboardOverview.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";

export default function StudentDashboardOverview() {
    return (
        <div className="studentDashboardContainer">
            <StudentDashboardMenu pageID={"overview"}/>
            <div className="studentDashboardOverviewContainer"></div>
        </div>
    );
}
