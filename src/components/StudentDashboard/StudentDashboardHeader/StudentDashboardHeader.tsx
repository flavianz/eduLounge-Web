import "./StudentDashboardHeader.css";
import SVGIcon from "../../../assets/images/svg/svg";

export default function StudentDashboardHeader() {
    return (
        <div className="studentDashboardHeaderContainer">
            <h3 className="studentDashboardHeaderTitle">Übersicht</h3>
            <div className="studentDashboardHeaderSearchBarContainer">
                <input
                    type="text"
                    className={"studentDashboardHeaderSearchBarInput"}
                />
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
