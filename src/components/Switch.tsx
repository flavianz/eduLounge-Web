import "./Switch.css";
export default function Switch({
    enabled,
    onChange,
}: {
    enabled: boolean;
    onChange: (value: boolean) => void;
}) {
    function handleClick() {
        onChange(!enabled);
    }

    return (
        <div
            className={
                "switchPanel" + (enabled ? " enabledSwitch" : " disabledSwitch")
            }
            onClick={handleClick}
        >
            <div
                className={
                    "switchPill" +
                    (enabled ? " enabledSwitchPill" : " disabledSwitchPill")
                }
            ></div>
        </div>
    );
}
