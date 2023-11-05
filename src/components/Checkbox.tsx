import "./Checkbox.css";
import SVGIcon from "../assets/images/svg/svg";
export default function Checkbox({
    enabled,
    onChange,
}: {
    enabled: boolean;
    onChange: (value: boolean) => void;
}) {
    return (
        <div
            className={
                "checkboxContainer" + (enabled ? " enabledCheckbox" : "")
            }
            onClick={() => {
                onChange(!enabled);
            }}
        >
            {enabled && <SVGIcon id={"checkmark"} className={"checkboxIcon"} />}
        </div>
    );
}
