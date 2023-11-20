import "./StudentDashboardMenu.css";
import SVGIcon from "../../../assets/images/svg/svg";
import { Link } from "react-router-dom";
import { sites } from "../../../constants";

export default function StudentDashboardMenu({ pageID }: { pageID: sites }) {
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
            title: "Stundenplan",
        },
        absences: {
            link: "/students/dashboard/absences",
            icon: "absences",
            title: "Absenzen",
        },
    };
    const accountOptions: {
        [key: string]: { link: string; icon: string; title: string };
    } = {
        account: {
            link: "/students/account",
            icon: "account",
            title: "Account",
        },
        settings: {
            link: "/students/settings",
            icon: "settings",
            title: "Einstellungen",
        },
        logout: {
            link: "/students/logout",
            icon: "logout",
            title: "Ausloggen",
        },
    };
    return (
        <div className="studentDashboardMenuContainer">
            <Link
                className="studentDashboardMenuLogoContainer"
                to={"students/dashboard"}
            >
                <SVGIcon
                    id={"logo-notext"}
                    className="studentDashboardMenuLogo"
                />
                <h4 className="studentDashboardMenuLogoText">Dashboard</h4>
            </Link>
            <div className="studentDashboardMenuNavigationContainer">
                {Object.keys(links).map((id, key) => {
                    const data = links[id];
                    return (
                        <Link
                            to={data.link}
                            className={
                                "studentDashboardMenuNavigationButton" +
                                (id === pageID
                                    ? " studentDashboardMenuNavigationButtonSelected"
                                    : "")
                            }
                            key={key}
                        >
                            <SVGIcon
                                id={data.icon}
                                className="studentDashboardMenuNavigationButtonIcon"
                            />
                            <p className="studentDashboardMenuNavigationButtonText">
                                {data.title}
                            </p>
                        </Link>
                    );
                })}
            </div>
            <div style={{ flex: 1 }}></div>
            <Link
                className="studentDashboardMenuAccountContainer"
                to={"/students/account"}
            >
                <img
                    src={require("../../../assets/images/graphics/sr2a322b96c6b10.webp")}
                    alt=""
                    className={"studentDashboardMenuAccountIcon"}
                />
                <div className="studentDashboardMenuAccountTextContainer">
                    <p className={"studentDashboardMenuAccountUsername"}>
                        [username]
                    </p>
                    <p className={"studentDashboardMenuAccountRole"}>
                        Schüler/in
                    </p>
                </div>
                <SVGIcon
                    id="arrow-top"
                    className="studentDashboardMenuOpenOptionsIcon"
                ></SVGIcon>
                <div className="studentDashboardMenuAccountOptions">
                    {Object.keys(accountOptions).map((optionID, key) => {
                        const option = accountOptions[optionID];
                        return (
                            <Link
                                key={key}
                                className="studentDashboardMenuAccountOptionContainer"
                                to={option.link}
                            >
                                <SVGIcon
                                    id={option.icon}
                                    className={
                                        "studentDashboardMenuAccountOptionIcon"
                                    }
                                ></SVGIcon>
                                <p className="studentDashboardMenuAccountOptionText">
                                    {option.title}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </Link>
        </div>
    );
}
