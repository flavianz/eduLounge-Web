import "./StudentDashboardSubjectDetails.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";

export default function StudentDashboardSubjectDetails() {
    document.title = "Übersicht | eduLounge";
    return (
        <div className="studentDashboardContainer">
            <StudentDashboardMenu pageID={"subjects"} />
            <div className="studentDashboardSubjectDetailsContainer">
                <StudentDashboardHeader pageID={"subjects"} />
                <div className="studentDashboardSubjectsDetailsContainer">
                    - Nächste Tests - Alle Noten - Schnittverlaufsdiagramm -
                    Schnittrechner
                </div>
            </div>
        </div>
    );
}
