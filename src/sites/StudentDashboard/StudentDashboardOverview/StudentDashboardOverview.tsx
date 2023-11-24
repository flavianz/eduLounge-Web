import "./StudentDashboardOverview.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";

export default function StudentDashboardOverview() {
    document.title = "Übersicht | eduLounge";
    return (
        <div className="studentDashboardContainer">
            <StudentDashboardMenu pageID={"overview"} />
            <div className="studentDashboardOverviewContainer">
                <StudentDashboardHeader pageID={"overview"} />
            </div>
        </div>
    );
}
