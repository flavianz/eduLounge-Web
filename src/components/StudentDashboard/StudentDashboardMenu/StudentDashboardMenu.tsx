import "./StudentDashboardMenu.css";
import SVGIcon from "../../../assets/images/svg/svg";
import { Link } from "react-router-dom";

export default function StudentDashboardMenu({pageID}:{pageID:string}) {
    const links: {
        [key: string]: { link: string; icon: string; title: string };
    } = {
        overview: {
            link: "/students/dashboard",
            icon: "home",
            title: "Übersicht",
        },
        subjects: {
            link: "/students/dashboard/subjects",
            icon: "subjects",
            title: "Fächer",
        },
        timetable: {
            link: "/students/dashboard/agenda",
            icon: "calendar",
            title: "Agenda",
        },
        absences: {
            link: "/students/dashboard/absences",
            icon: "absences",
            title: "Absenzen",
        },
    };
    return (
        <div className="studentDashboardMenuContainer">
            <div className="studentDashboardMenuLogoContainer">
                <SVGIcon
                    id={"logo-notext"}
                    className="studentDashboardMenuLogo"
                />
                <h4 className="studentDashboardMenuLogoText">Dashboard</h4>
            </div>
            <div className="studentDashboardMenuNavigationContainer">
                {Object.keys(links).map((id, key) => {
                    const data = links[id];
                    return (
                        <Link
                            to={data.link}
                            className={"studentDashboardMenuNavigationButton" + (id === pageID ? " studentDashboardMenuNavigationButtonSelected" : "")}
                            key={key}
                        >
                            <SVGIcon
                                id={data.icon}
                                className="studentDashboardMenuNavigationButtonIcon"
                            />
                            <p className="studentDashboardMenuNavigationButtonText">{data.title}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
