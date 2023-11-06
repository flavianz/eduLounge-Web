import "./StyledTextInput.css";

export default function StyledTextInput({
    size = "medium",
    border = true,
    value,
    placeholder = "",
    onChange,
    password = false,
}: {
    size: "small" | "medium" | "large";
    border?: boolean;
    value: string;
    placeholder?: string;
    onChange: (result: string) => void;
    password?: boolean;
}) {
    return (
        <div
            className={
                "styledTextInputContainer" +
                (border ? " styledTextInputContainerBorder" : "")
            }
        >
            <input
                placeholder={placeholder}
                value={value}
                type={password ? "password" : "text"}
                className={"styledInputInput styledTextInputSize" + size}
                onChange={(result) => onChange(result.target.value)}
            ></input>
        </div>
    );
}
