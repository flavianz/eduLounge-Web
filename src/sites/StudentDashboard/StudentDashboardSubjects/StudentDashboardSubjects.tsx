import "./StudentDashboardSubjects.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";
import { subjects } from "../../../scripts/dummy";
import SVGIcon from "../../../assets/images/svg/svg";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function StudentDashboardOverview() {
    const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
    const navigate = useNavigate();
    return (
        <div className="studentDashboardContainer">
            <StudentDashboardMenu pageID={"subjects"} />
            <div className="studentDashboardSubjectsContainer">
                <StudentDashboardHeader pageID={"subjects"} />
                <div className="studentDashboardSubjectsDataContainer">
                    {Object.keys(subjects).map((id, key) => {
                        const subject = subjects[id];
                        const expanded = expandedSubjects.includes(id);
                        return !expanded ? (
                            <div
                                className={"studentDashboardSubjectContainer"}
                                onClick={() => {
                                    setExpandedSubjects([
                                        ...expandedSubjects,
                                        id,
                                    ]);
                                }}
                            >
                                <p className="studentDashboardSubjectName">
                                    {subject.name}
                                </p>
                                <div
                                    onClick={() => {
                                        navigate(
                                            "/students/dashboard/subjects/details?s=" +
                                                id
                                        );
                                    }}
                                    className="studentDashboardSubjectDetailsIconContainer"
                                >
                                    <SVGIcon
                                        id={"details"}
                                        className={
                                            "studentDashboardSubjectDetailsIcon"
                                        }
                                    />
                                </div>
                                <p className={"studentDashboardSubjectAverage"}>
                                    {subject.average}
                                </p>
                            </div>
                        ) : (
                            <div
                                className={
                                    "studentDashboardSubjectContainer" +
                                    (expanded
                                        ? " studentDashboardSubjectWideContainer"
                                        : "")
                                }
                                key={key}
                            >
                                {expanded && (
                                    <div className="studentDashboardSubjectDetailsContainer">
                                        <div className="studentDashboardSubjectDetailsHeaderContainer">
                                            <p className="studentDashboardSubjectDetailsTitle">
                                                {subject.name}
                                            </p>
                                            <div
                                                className="studentDashboardSubjectDetailsIconContainer"
                                                onClick={() => {
                                                    const index =
                                                        expandedSubjects.indexOf(
                                                            id
                                                        );
                                                    if (index !== -1) {
                                                        const result =
                                                            expandedSubjects.filter(
                                                                (item) => {
                                                                    return (
                                                                        item !==
                                                                        id
                                                                    );
                                                                }
                                                            );
                                                        setExpandedSubjects(
                                                            result
                                                        );
                                                    }
                                                }}
                                            >
                                                <SVGIcon
                                                    id={"close"}
                                                    className={
                                                        "studentDashboardSubjectDetailsCloseIcon"
                                                    }
                                                ></SVGIcon>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
