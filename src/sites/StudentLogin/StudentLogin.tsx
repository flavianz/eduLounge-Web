import "./StudentLogin.css";
import StyledTextInput from "../../components/StyledTextInput/StyledTextInput";
import { useState } from "react";

export default function StudentLogin() {
    const [username, setUsername] = useState("");
    return (
        <div className="studentLoginPageContainer">
            <div className="studentLoginContainer">
                <h3 className="studentLoginTitle">Schüler Login</h3>
                <StyledTextInput
                    value={username}
                    size={"small"}
                    onChange={(result) => setUsername(result)}
                    placeholder={"Placeholder"}
                ></StyledTextInput>
                <StyledTextInput
                    value={username}
                    size={"medium"}
                    onChange={(result) => setUsername(result)}
                    placeholder={"Placeholder"}
                ></StyledTextInput>
                <StyledTextInput
                    value={username}
                    size={"large"}
                    onChange={(result) => setUsername(result)}
                    placeholder={"Placeholder"}
                ></StyledTextInput>
            </div>
        </div>
    );
}
