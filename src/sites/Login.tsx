import { useState } from "react";
import { Button } from "@mantine/core";
import { login } from "../scripts/server.ts";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submit(event: { preventDefault: () => void }) {
        event.preventDefault();
        const result = await login(username, password);
        if (result === 200) {
            navigate("/home");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
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
                <Button type="submit" onClick={submit}>
                    Einloggen
                </Button>
            </form>
        </div>
    );
}
