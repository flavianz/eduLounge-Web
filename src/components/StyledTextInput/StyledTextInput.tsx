import "./StyledTextInput.css";
import { useState } from "react";
import SVGIcon from "../../assets/images/svg/svg";

export default function StyledTextInput({
    size = "medium",
    border = true,
    value,
    placeholder = "",
    onChange,
    password = false,
    style = {},
}: {
    size: "small" | "medium" | "large";
    border?: boolean;
    value: string;
    placeholder?: string;
    onChange: (result: string) => void;
    password?: boolean;
    style?: object;
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div
            className={
                "styledTextInputContainer" +
                (border ? " styledTextInputContainerBorder" : "")
            }
            style={style}
        >
            <input
                placeholder={placeholder}
                value={value}
                type={password && !passwordVisible ? "password" : "text"}
                className={"styledInputInput styledTextInputSize-" + size}
                onChange={(result) => onChange(result.target.value)}
            ></input>
            {password && (
                <div onClick={() => setPasswordVisible(!passwordVisible)}>
                    <SVGIcon
                        id={passwordVisible ? "hide-password" : "show-password"}
                        className={"styledInputPasswordChanger"}
                    ></SVGIcon>
                </div>
            )}
        </div>
    );
}
