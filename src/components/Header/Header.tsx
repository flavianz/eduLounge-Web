import "./Header.css";
import { Link } from "react-router-dom";
import StyledButton from "./../StyledButton/StyledButton";
import StyledLink from "./../StyledLink/StyledLink";
import Switch from "./../Switch/Switch";
import { useState } from "react";
import SVGIcon from "../../assets/images/svg/svg";
export default function Header() {
    const [enabled, setEnabled] = useState(
        document.documentElement.getAttribute("data-theme") === "dark",
    );
    return (
        <div className="headerContainer">
            <Link to={"/"}>
                <SVGIcon id={"logo-text"} className={"logo"} />
            </Link>
            <div className="linkContainer">
                <StyledLink
                    text={"Produkte"}
                    padding={"small"}
                    to={"/placeholder"}
                />
                <StyledLink text={"Wir"} padding={"small"} to={"/about"} />
                <StyledLink
                    text={"Hilfe"}
                    padding={"small"}
                    to={"/placeholder"}
                />
                <StyledLink
                    text={"Dashboard"}
                    padding={"small"}
                    to={"/placeholder"}
                />
                <Link to={"/students/login"}>
                    <StyledButton
                        hover={{
                            position: false,
                            shadow: true,
                            underline: false,
                        }}
                        text={"Anmelden"}
                        type={"full"}
                        size={"small"}
                    ></StyledButton>
                </Link>
                <Switch
                    enabled={enabled}
                    onChange={(value) => {
                        document.documentElement.setAttribute(
                            "data-theme",
                            value ? "dark" : "light",
                        );
                        setEnabled(value);
                    }}
                ></Switch>
            </div>
        </div>
    );
}
