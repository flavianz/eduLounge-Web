import Navbar from "../components/Navbar/Navbar.tsx";
import { Button } from "@mantine/core";
import { testAccessToken } from "../scripts/server.ts";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Button
                onClick={async () => {
                    console.log(await testAccessToken());
                }}
            >
                Test
            </Button>
        </div>
    );
}
