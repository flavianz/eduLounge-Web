import classes from "./Navbar.module.css";
import { LogoText } from "../../assets/LogoText.tsx";
import { ActionIcon, Group, ScrollArea, Tooltip } from "@mantine/core";
import { Icon360, IconSettings } from "@tabler/icons-react";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup.tsx";
export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={classes.header}>
                <Group justify={"space-between"} wrap={"nowrap"}>
                    <LogoText style={{ paddingRight: "2rem" }} />
                    <Tooltip label="Einstellungen" position={"right"}>
                        <ActionIcon
                            variant="default"
                            aria-label="Einstellungen"
                        >
                            <IconSettings
                                style={{ width: "70%", height: "70%" }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </div>
            <ScrollArea className={classes.links}>
                <LinksGroup
                    label={"Hello"}
                    icon={Icon360}
                    links={[
                        { label: "World", link: "" },
                        { label: "World", link: "" },
                    ]}
                ></LinksGroup>
            </ScrollArea>
        </nav>
    );
}
