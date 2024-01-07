import { useState } from "react";
import { Button } from "@mantine/core";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submit() {}

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder={"Username"}
            />
            <input
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={"Password"}
            />
            <Button onClick={submit}>Einloggen</Button>
        </div>
    );
}
