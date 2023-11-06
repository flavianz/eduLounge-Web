import "./Footer.css";
import { useState } from "react";
import SVGIcon from "../../assets/images/svg/svg";
import StyledLink from "./../StyledLink/StyledLink";
export default function Footer() {
    const [mode, setMode] = useState(
        document.documentElement.getAttribute("data-theme")
    );
    return (
        <div className="footerContainer">
            <div className={"footerLogoContainer footerSectionContainer"}>
                <SVGIcon id={"logo-text"} className={"footerLogo"} />
                <div>
                    <p className="copyrightFooterText">
                        Copyright © 2023 Flavian Züllig
                    </p>
                    <p className="copyrightFooterText">
                        Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
            <div className={"footerSectionContainer"}>
                <p className="footerSectionTitle">Firma</p>
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
            </div>
            <div className={"footerSectionContainer"}>
                <p className="footerSectionTitle">Firma</p>
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
            </div>
            <div className={"footerSectionContainer"}>
                <p className="footerSectionTitle">Kontakt</p>
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
            </div>
            <div className={"footerSectionContainer"}>
                <p className="footerSectionTitle">Rechtliches</p>
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
                <StyledLink to={"/404"} text={"Placeholder"} padding={"big"} />
            </div>
        </div>
    );
}
