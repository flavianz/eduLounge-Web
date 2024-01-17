import Navbar from "../components/Navbar/Navbar.tsx";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMarks } from "../scripts/server.ts";
import { Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

export default function SubjectDetails() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(useParams());
    if (!id) {
        navigate("/subjects");
        return;
    }
    const subject_id: string = id;
    function SubjectData() {
        const { data, status } = useQuery({
            queryKey: ["subjects"],
            queryFn: () => getMarks(subject_id),
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
                        mark: {
                            mark_id: string;
                            mark: string;
                            mark_weight: string;
                            name: string;
                            date: string;
                        },
                        key: number
                    ) => {
                        const date = new Date(parseInt(mark.date));
                        let dateText;
                        if (isNaN(date.getTime())) {
                            dateText = "Fehler";
                        } else {
                            dateText = date.toLocaleString();
                        }
                        return (
                            <div
                                key={key}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <p>{mark.name}</p>
                                <p>{mark.mark}</p>
                                <p>{mark.mark_weight}</p>
                                <p>{dateText}</p>
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
            <SubjectData />
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
