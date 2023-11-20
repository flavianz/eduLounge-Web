import "./StudentDashboardHeader.css";
import SVGIcon from "../../../assets/images/svg/svg";
import { sites } from "../../../constants";

export default function StudentDashboardHeader({ pageID }: { pageID: sites }) {
    const titles = {
        overview: "Übersicht",
        subjects: "Fächer",
        timetable: "Stundenplan",
        absences: "Absenzen",
    };
    return (
        <div className="studentDashboardHeaderContainer">
            <h3 className="studentDashboardHeaderTitle">{titles[pageID]}</h3>
            <div className="studentDashboardHeaderSearchBarContainer">
                <input
                    type="text"
                    placeholder={"Suche..."}
                    className={"studentDashboardHeaderSearchBarInput"}
                />
                <SVGIcon
                    id={"lens"}
                    className={"studentDashboardHeaderSearchBarIcon"}
                ></SVGIcon>
            </div>
            <div className="studentDashboardHeaderIconContainer">
                <SVGIcon
                    id="notifications-with-alert"
                    className={"studentDashboardHeaderIconNotification"}
                />
                <div className="studentDashboardHeaderLanguageSelectorContainer">
                    <SVGIcon
                        id="italian-flag"
                        className="studentDashboardHeaderLanguageSelectorFlag"
                    />
                    <SVGIcon
                        id="arrow-top"
                        className="studentDashboardHeaderLanguageSelectorArrow"
                    />
                </div>
            </div>
        </div>
    );
}
