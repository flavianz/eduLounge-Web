import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import StyledButton from "../../components/StyledButton/StyledButton";
import "./NotFound.css";

export default function NotFound() {
    document.title = "404 | eduLounge";
    return (
        <div className="notFoundSiteContainer">
            <Header />
            <div className="notFoundContainer">
                <h1>404</h1>
                <h3>Hier gibt's nichts zu sehen</h3>
                <Link to={"/"}>
                    <StyledButton
                        type={"full"}
                        text={"Weiter"}
                        size={"big"}
                        hover={{
                            position: true,
                            shadow: true,
                            underline: false,
                        }}
                    ></StyledButton>
                </Link>
            </div>
        </div>
    );
}
