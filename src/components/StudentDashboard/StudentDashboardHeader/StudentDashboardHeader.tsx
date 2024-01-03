import "./StudentDashboardHeader.css";
import SVGIcon from "../../../assets/images/svg/svg";
import { sites } from "../../../scripts/constants";

export default function StudentDashboardHeader({
    pageID,
    titleExtension = "",
}: {
    pageID: sites;
    titleExtension?: string;
}) {
    const titles = {
        overview: "Übersicht",
        subjects: "Fächer",
        timetable: "Stundenplan",
        absences: "Absenzen",
        subjectDetails: "",
    };
    return (
        <div className="studentDashboardHeaderContainer">
            <h3 className="studentDashboardHeaderTitle">
                {titles[pageID] + titleExtension}
            </h3>
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
                        id="german-flag"
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
