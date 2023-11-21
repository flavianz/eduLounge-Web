import "./StudentDashboardSubjects.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";

export default function StudentDashboardOverview() {
    const subjects = {
        bg: {
            teacher: {
                name: "Anja Messerli",
            },
            name: "Bildnerisches Gestalten",
            klassen: ["1a, 1i"],
            tests: {}
        },
    };
    return (
        <div className="studentDashboardContainer">
            <StudentDashboardMenu pageID={"subjects"} />
            <StudentDashboardHeader pageID={"subjects"} />
            <div className="studentDashboardSubjectContainer"></div>
        </div>
    );
}
