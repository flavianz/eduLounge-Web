import "./StudentDashboardSubjects.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";
import { subjects } from "../../../scripts/dummy";
import SVGIcon from "../../../assets/images/svg/svg";

export default function StudentDashboardOverview() {
    return (
        <div className="studentDashboardContainer">
            <StudentDashboardMenu pageID={"subjects"} />
            <div className="studentDashboardSubjectsContainer">
                <StudentDashboardHeader pageID={"subjects"} />
                <div className="studentDashboardSubjectsDataContainer">
                    {Object.keys(subjects).map((id, key) => {
                        const subject = subjects[id];
                        return (
                            <div
                                className="studentDashboardSubjectContainer"
                                key={key}
                            >
                                <p className="studentDashboardSubjectName">
                                    {subject.name}
                                </p>
                                <SVGIcon
                                    id={"details"}
                                    className={
                                        "studentDashboardSubjectDetailsIcon"
                                    }
                                />
                                <p className={"studentDashboardSubjectAverage"}>
                                    {subject.average}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
