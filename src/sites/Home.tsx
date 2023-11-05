import { Link } from "react-router-dom";
import Header from "../components/Header";
import Switch from "../components/Switch";
import "./Home.css";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Selector from "../components/Selector";
import Footer from "../components/Footer";

export default function Home() {
    document.title = "Home | eduLounge";
    const [enabled, setEnabled] = useState(false);
    const [checkboxEnabled, setCheckboxEnabled] = useState(false);
    const [selected, setSelected] = useState({ key: "light", value: "Hell" });
    return (
        <div className="container">
            <Header />
            <div className="homeContainer">
                <Link to={"/components"}>
                    <button></button>
                </Link>
                <Switch
                    enabled={enabled}
                    onChange={(val) => {
                        setEnabled(val);
                        document.documentElement.setAttribute(
                            "data-theme",
                            val ? "dark" : "light"
                        );
                    }}
                />
                <Checkbox
                    enabled={checkboxEnabled}
                    onChange={(value) => {
                        setCheckboxEnabled(value);
                    }}
                />
                <Selector
                    selected={selected}
                    options={[
                        { key: "light", value: "Hell" },
                        { key: "dark", value: "Dunkel" },
                    ]}
                    onChange={(selected) => {
                        setSelected(selected);
                    }}
                />
            </div>
            <Footer />
        </div>
    );
}
