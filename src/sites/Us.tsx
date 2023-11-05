import Header from "../components/Header";
import "./Us.css";
import Footer from "../components/Footer";
import SVGIcon from "../assets/images/svg/svg";

export default function Us() {
    return (
        <div className="usContainer">
            <Header />
            <div className="usContent">
                <h1>Über eduLounge</h1>
                <h4 className="usSubtitle">Lerne eduLounge und uns kennen</h4>
                <div className="weBelieveUs">
                    <div className="weBelieveUsTextContainer">
                        <h4>Wir finden...</h4>
                        <p className="weBelieveUsText">
                            ..., dass Schule schon genug kompliziert ist. Der
                            endlose Papierkram und das mühsame Zusammenarbeiten
                            soll endlich ein Ende haben. Alle Abläufe sollten
                            wie geschmiert laufen.
                        </p>
                    </div>
                    <SVGIcon
                        id={"complex-graphic"}
                        className={"weBelieveUsImage"}
                    />
                </div>
                <div className="weBelieveUs">
                    <SVGIcon
                        id={"simple-graphic"}
                        className={"weBelieveUsImage"}
                    />
                    <div className="weBelieveUsTextContainer">
                        <h4>Wir wollen...</h4>
                        <p className="weBelieveUsText">
                            ... die Organisation einer Schule von Schüler*innen
                            bis Lehrer*innen und Schulleitung an einer
                            Schnittstelle bereitstellen und für reibungslose
                            Abläufe an Ihrer Schule sorgen.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
