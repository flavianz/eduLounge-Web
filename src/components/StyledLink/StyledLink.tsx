import "./StyledLink.css";
import { Link } from "react-router-dom";
export default function StyledLink({
    padding = "small",
    text = "Styled Link",
    to,
}: {
    padding?: "small" | "big";
    text?: string;
    to: string;
}) {
    return (
        <Link
            to={to}
            className={"linkButton " + padding + "Link" + " linkText"}
        >
            <p className={"linkText"}>{text}</p>
        </Link>
    );
}
