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
                    <div
                        style={{ flex: 5 }}
                        className="studentDashboardSubjectsDetailsSideContainer"
                    >
                        <div className="studentDashboardSubjectDetailsMarksContainer">
                            <h4
                                className={
                                    "studentDashboardSubjectDetailsMarksTitle"
                                }
                            >
                                Noten
                            </h4>
                            <div className="studentDashboardSubjectDetailsMarksContainer">
                                {}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ flex: 4 }}
                        className="studentDashboardSubjectsDetailsSideContainer"
                    >
                        <div className="studentDashboardSubjectDetailsMarksContainer">
                            <h4
                                className={
                                    "studentDashboardSubjectDetailsMarksTitle"
                                }
                            >
                                Nächste Tests
                            </h4>
                        </div>
                    </div>
                </div>
                - Nächste Tests - Alle Noten - Schnittverlaufsdiagramm -
                Schnittrechner
            </div>
        </div>
    );
}
