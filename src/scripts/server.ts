import axios from "axios";

const server = "http://localhost:3000";

export async function login(username: string, password: string) {
    return (
        await axios.post(
            server + "/login",
            {
                username: username,
                password: password,
            },
            { withCredentials: true }
        )
    ).status;
}
export async function testAccessToken() {
    return await axios.get(server + "/testAccessToken", {
        withCredentials: true,
    });
}
