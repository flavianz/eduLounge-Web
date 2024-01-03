import "./StyledLink.css";
import { Link } from "react-router-dom";
export default function StyledLink({
    padding = "small",
    text = "Styled Link",
    to,
    className = "",
}: {
    padding?: "small" | "big";
    text?: string;
    to: string;
    className?: string;
}) {
    return (
        <Link
            to={to}
            className={
                "linkButton " + padding + "Link" + " linkText " + className
            }
        >
            <p className={"linkText"}>{text}</p>
        </Link>
    );
}
