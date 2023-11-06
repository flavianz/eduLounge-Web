import StyledButton from "../../components/StyledButton/StyledButton";
import "./ComponentOverview.css";

export default function ComponentOverview() {
    document.title = "Components | eduLounge";
    return (
        <div className={"componentOverviewContainer"}>
            <div className={"typeContainer"}>
                <StyledButton
                    size={"small"}
                    type={"gradient"}
                    text={"Test Button Jumbo"}
                    hover={{ position: true, shadow: false, underline: false }}
                ></StyledButton>
                <StyledButton
                    size={"medium"}
                    type={"gradient"}
                    text={"Test Button Jumbo"}
                    hover={{ position: false, shadow: true, underline: false }}
                ></StyledButton>
                <StyledButton
                    size={"big"}
                    type={"gradient"}
                    text={"Test Button"}
                    hover={{ position: true, shadow: true, underline: false }}
                ></StyledButton>
            </div>
            <div className={"typeContainer"}>
                <StyledButton
                    size={"small"}
                    type={"full"}
                    text={"Test Button Jumbo"}
                    hover={{ position: true, shadow: false, underline: false }}
                ></StyledButton>
                <StyledButton
                    size={"medium"}
                    type={"full"}
                    text={"Test Button Jumbo"}
                    hover={{ position: false, shadow: true, underline: false }}
                ></StyledButton>
                <StyledButton
                    size={"big"}
                    type={"full"}
                    text={"Test Button"}
                    hover={{ position: true, shadow: true, underline: false }}
                ></StyledButton>
            </div>
            <div className={"typeContainer"}>
                <StyledButton
                    size={"small"}
                    type={"light"}
                    text={"Test Button"}
                ></StyledButton>
                <StyledButton
                    size={"medium"}
                    type={"light"}
                    text={"Test Button"}
                ></StyledButton>
                <StyledButton
                    size={"big"}
                    type={"light"}
                    text={"Test Button"}
                ></StyledButton>
            </div>
            <div className={"typeContainer"}>
                <StyledButton
                    size={"small"}
                    type={"clear"}
                    text={"Test Button"}
                ></StyledButton>
                <StyledButton
                    size={"medium"}
                    type={"clear"}
                    text={"Test Button"}
                ></StyledButton>
                <StyledButton
                    size={"big"}
                    type={"clear"}
                    text={"Test Button"}
                ></StyledButton>
            </div>
        </div>
    );
}
