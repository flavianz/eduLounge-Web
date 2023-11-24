import "./StudentDashboardSubjects.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";
import { subjects } from "../../../scripts/dummy";
import SVGIcon from "../../../assets/images/svg/svg";
import { useState } from "react";
import { useNavigate } from "react-router";
import { findAllByDisplayValue } from "@testing-library/react";

export default function StudentDashboardOverview() {
    document.title = "Noten | eduLounge";
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
                                <p className={"studentDashboardSubjectAverage"}>
                                    {subject.average}
                                </p>
                                <div
                                    onClick={() => {
                                        navigate(
                                            "/students/dashboard/subjects/details?s=" +
                                                id,
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
                            </div>
                        ) : (
                            <div
                                className={
                                    "studentDashboardSubjectWideContainer" +
                                    (expanded
                                        ? " studentDashboardSubjectContainer"
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
                                                className={
                                                    "studentDashboardSubjectDetailsIconsExpanded"
                                                }
                                            >
                                                <div
                                                    className="studentDashboardSubjectDetailsIconExpanded"
                                                    onClick={() => {
                                                        navigate(
                                                            "/students/dashboard/subjects/details?s=" +
                                                                id,
                                                        );
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            "studentDashboardSubjectDetailsIconExpandedText"
                                                        }
                                                    >
                                                        Details
                                                    </p>
                                                    <SVGIcon
                                                        id={"details"}
                                                        className={
                                                            "studentDashboardSubjectDetailsIconExpandedIcon"
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="studentDashboardSubjectDetailsIconContainer"
                                                    onClick={() => {
                                                        const index =
                                                            expandedSubjects.indexOf(
                                                                id,
                                                            );
                                                        if (index !== -1) {
                                                            const result =
                                                                expandedSubjects.filter(
                                                                    (item) => {
                                                                        return (
                                                                            item !==
                                                                            id
                                                                        );
                                                                    },
                                                                );
                                                            setExpandedSubjects(
                                                                result,
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
                                        <div className="studentDashboardSubjectDetailsDataContainer">
                                            <div
                                                className={
                                                    "studentDashboardSubjectDetailsTitleTableRowContainer"
                                                }
                                                key={key}
                                            >
                                                <p
                                                    className={
                                                        "studentDashboardSubjectDetailsTableHeader"
                                                    }
                                                    style={{ flex: 2 }}
                                                >
                                                    Datum
                                                </p>
                                                <p
                                                    className={
                                                        "studentDashboardSubjectDetailsTableHeader"
                                                    }
                                                    style={{ flex: 4 }}
                                                >
                                                    Thema
                                                </p>
                                                <p
                                                    className={
                                                        "studentDashboardSubjectDetailsTableHeader"
                                                    }
                                                    style={{ flex: 1 }}
                                                >
                                                    Note
                                                </p>
                                                <p
                                                    className={
                                                        "studentDashboardSubjectDetailsTableHeader"
                                                    }
                                                    style={{ flex: 1 }}
                                                >
                                                    Gewichtung
                                                </p>
                                            </div>
                                            {Object.keys(subject.tests).map(
                                                (testID, key) => {
                                                    const test =
                                                        subject.tests[testID];
                                                    return (
                                                        <a
                                                            className={
                                                                "studentDashboardSubjectDetailsTableRowContainer"
                                                            }
                                                            key={key}
                                                            href={
                                                                "/students/dashboard/subjects/mark?m=" +
                                                                testID
                                                            }
                                                        >
                                                            <p
                                                                className={
                                                                    "studentDashboardSubjectDetailsTableDate"
                                                                }
                                                            >
                                                                {new Date(
                                                                    test.start,
                                                                ).toLocaleDateString()}
                                                            </p>
                                                            <p
                                                                className={
                                                                    "studentDashboardSubjectDetailsTableName"
                                                                }
                                                            >
                                                                {test.name}
                                                            </p>
                                                            <p className="studentDashboardSubjectDetailsTableMark">
                                                                {test.mark}
                                                            </p>
                                                            <p className="studentDashboardSubjectDetailsTableWeight">
                                                                {test.weight}
                                                            </p>
                                                        </a>
                                                    );
                                                },
                                            )}
                                            <a
                                                className="studentDashboardSubjectDetailsAverageContainer"
                                                href={
                                                    "/students/dashboard/subjects/details?s=" +
                                                    id
                                                }
                                            >
                                                <div
                                                    className={
                                                        "studentDashboardSubjectDetailsTableDate"
                                                    }
                                                ></div>
                                                <p
                                                    className={
                                                        "studentDashboardSubjectDetailsTableName"
                                                    }
                                                >
                                                    Gesamtschnitt
                                                </p>
                                                <p className="studentDashboardSubjectDetailsTableMark">
                                                    {subject.average}
                                                </p>
                                                <div className="studentDashboardSubjectDetailsTableWeight"></div>
                                            </a>
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
