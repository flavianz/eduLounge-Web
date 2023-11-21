import "./StudentDashboardSubjects.css";
import StudentDashboardMenu from "../../../components/StudentDashboard/StudentDashboardMenu/StudentDashboardMenu";
import StudentDashboardHeader from "../../../components/StudentDashboard/StudentDashboardHeader/StudentDashboardHeader";

export default function StudentDashboardOverview() {
    const subjects: {
        [key: string]: {
            teacher: {
                name: string;
            };
            average: string;
            klassen: string[];
            name: string;
            tests: {
                [key: string]: {
                    name: string;
                    start: number;
                    end: number;
                    topics: string;
                    createdAt: number;
                    mark: number;
                    type: "project" | "presentation" | "exam";
                    weight: number;
                };
            };
        };
    } = {
        bg: {
            teacher: {
                name: "Anja Messerli",
            },
            average: "4.5",
            name: "Bildnerisches Gestalten",
            klassen: ["1a, 1i"],
            tests: {
                "0": {
                    name: "Bleistift",
                    start: Date.now(),
                    end: Date.now(),
                    topics: "-Bleistifte\n-Zeichnungen",
                    createdAt: Date.now(),
                    type: "project",
                    mark: 6,
                    weight: 0.5,
                },
                "1": {
                    name: "Vortrag",
                    start: Date.now(),
                    end: Date.now(),
                    topics: "-Bleistifte\n-Zeichnungen",
                    createdAt: Date.now(),
                    type: "presentation",
                    mark: 5,
                    weight: 1,
                },
                "2": {
                    name: "Farbenlehre",
                    start: Date.now(),
                    end: Date.now(),
                    topics: "-Bleistifte\n-Zeichnungen",
                    createdAt: Date.now(),
                    type: "exam",
                    mark: 4.5,
                    weight: 1,
                },
            },
        },
        history: {
            teacher: {
                name: "Anja Messerli",
            },
            average: "4.5",
            name: "Bildnerisches Gestalten",
            klassen: ["1a, 1i"],
            tests: {
                "0": {
                    name: "Bleistift",
                    start: Date.now(),
                    end: Date.now(),
                    topics: "-Bleistifte\n-Zeichnungen",
                    createdAt: Date.now(),
                    type: "project",
                    mark: 6,
                    weight: 0.5,
                },
                "1": {
                    name: "Vortrag",
                    start: Date.now(),
                    end: Date.now(),
                    topics: "-Bleistifte\n-Zeichnungen",
                    createdAt: Date.now(),
                    type: "presentation",
                    mark: 5,
                    weight: 1,
                },
                "2": {
                    name: "Farbenlehre",
                    start: Date.now(),
                    end: Date.now(),
                    topics: "-Bleistifte\n-Zeichnungen",
                    createdAt: Date.now(),
                    type: "exam",
                    mark: 4.5,
                    weight: 1,
                },
            },
        },
    };
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
