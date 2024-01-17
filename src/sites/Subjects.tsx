import Navbar from "../components/Navbar/Navbar.tsx";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSubjects } from "../scripts/server.ts";
import { Button } from "@mantine/core";

export default function Subjects() {
    const queryClient = useQueryClient();
    function Subjects() {
        const { data, status } = useQuery({
            queryKey: ["subjects"],
            queryFn: getSubjects,
        });
        if (status == "pending") {
            return <p>Loading...</p>;
        }
        if (status === "error") {
            return <p>Error</p>;
        }
        return (
            <div>
                {data.data.map(
                    (
                        subject: { name: string; subject_id: string },
                        key: number
                    ) => {
                        return (
                            <div key={key}>
                                <p>{subject.name}</p>
                                <a
                                    href={`/subjects/details/${subject.subject_id}`}
                                >
                                    Details
                                </a>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Navbar></Navbar>
            <Subjects />
            <Button
                onClick={async () => {
                    await queryClient.invalidateQueries();
                }}
            >
                Reload
            </Button>
        </div>
    );
}
