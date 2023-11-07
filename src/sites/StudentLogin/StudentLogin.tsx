import "./StudentLogin.css";
import StyledTextInput from "../../components/StyledTextInput/StyledTextInput";
import { useState } from "react";
import StyledLink from "../../components/StyledLink/StyledLink";
import StyledButton from "../../components/StyledButton/StyledButton";

export default function StudentLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="studentLoginPageContainer">
            <div className="studentLoginContainer">
                <h3 className="studentLoginTitle">Schüler Login</h3>
                <div className="formContainer">
                    <h5 className="studentLoginSubTitle">Benutzername</h5>
                    <StyledTextInput
                        value={username}
                        size={"medium"}
                        onChange={(result) => setUsername(result)}
                        placeholder={"Gib deinen Benutzernamen ein..."}
                        style={{ height: "15%" }}
                    />
                    <h5 className="studentLoginSubTitle">Passwort</h5>
                    <StyledTextInput
                        value={password}
                        size={"medium"}
                        password
                        onChange={(result) => setPassword(result)}
                        placeholder={"Gib dein Passwort ein..."}
                        style={{ height: "15%" }}
                    />
                </div>
                <div className="submissionContainer">
                    <div className={"forgotPassword"}>
                        <StyledLink
                            text={"Passwort vergessen?"}
                            to={"/resetPassword"}
                            padding={"big"}
                        ></StyledLink>
                    </div>
                    <StyledButton
                        size={"medium"}
                        hover={{
                            position: false,
                            shadow: true,
                            underline: false,
                        }}
                        text={"Einloggen"}
                        type={"gradient"}
                    />
                </div>
            </div>
        </div>
    );
}
