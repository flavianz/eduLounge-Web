import "./Selector.css";
export default function Selector({
    selected,
    onChange,
    options,
}: {
    selected: { key: string; value: string };
    onChange: ({ key, value }: { key: string; value: string }) => void;
    options: { key: string; value: string }[];
}) {
    return (
        <div className="selectorContainer">
            {options.map((option, key) => {
                return (
                    <div
                        key={key}
                        className={
                            "optionContainer" +
                            (selected.key === option.key
                                ? ""
                                : " optionContainerDisabled")
                        }
                        onClick={() => {
                            onChange(option);
                        }}
                    >
                        <div className="outerSelectionBox">
                            <div
                                className={
                                    "selectorBox" +
                                    (selected.key === option.key
                                        ? " enabledSelector"
                                        : "")
                                }
                            />
                        </div>
                        <p>{option.value}</p>
                    </div>
                );
            })}
        </div>
    );
}
