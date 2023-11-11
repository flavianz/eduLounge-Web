import "./StudentDashboardMenu.css";
import SVGIcon from "../../../assets/images/svg/svg";
import { Link } from "react-router-dom";

export default function StudentDashboardMenu() {
    const links: {
        [key: string]: { link: string; icon: string; title: string };
    } = {
        subjects: {
            link: "/students/dashboard/subjects",
            icon: "subjects",
            title: "Fächer",
        },
        timetable: {
            link: "/students/dashboard/timetable",
            icon: "timetable",
            title: "Stundenplan",
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
                            className="studentDashboardMenuNavigationButton"
                            key={key}
                        >
                            <SVGIcon
                                id={data.icon}
                                className="studentDashboardMenuNavigationButtonIcon"
                            />
                            <h5>{data.title}</h5>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
