import "./StyledButton.css";
export default function StyledButton({
    type = "full",
    size = "small",
    text = "{Button text}",
    hover = { position: true, shadow: true, underline: false },
}: {
    type?: "full" | "light" | "clear" | "gradient";
    size?: "small" | "medium" | "big";
    text?: string;
    hover?: { position: boolean; shadow: boolean; underline: boolean };
}) {
    const shadowHover = hover.shadow
        ? (type === "light" ? " secondary" : " primary") + "ShadowHover"
        : "";
    const buttonClass =
        type +
        " " +
        size +
        shadowHover +
        (hover.position ? " positionHover" : "") +
        (hover.underline ? " underline" : "");
    return (
        <button className={buttonClass}>
            <p className={type + "Text " + size + "Text"}>{text}</p>
        </button>
    );
}
