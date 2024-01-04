import { JSX } from "react";
import { Group, Box, Collapse, ThemeIcon, rem, NavLink } from "@mantine/core";
import {
    IconCalendarStats,
    IconChevronRight,
    TablerIconsProps,
} from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";

interface LinksGroupProps {
    icon?: (props: TablerIconsProps) => JSX.Element;
    label: string;
    initiallyOpened?: boolean;
    link?: string;
    children?: LinksGroupProps[];
}

export function LinksGroup({ links }: { links: LinksGroupProps }) {
    const getNavComponent = (links: LinksGroupProps) => {
        return (
            <NavLink
                href={links.link}
                label={links.label}
                leftSection={<links.icon></links.icon>}
            ></NavLink>
        );
    };
    return (
        <>
            <NavLink
                onClick={() => setOpened((o) => !o)}
                className={classes.control}
            >
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <ThemeIcon variant="light" size={30}>
                            <Icon style={{ width: rem(18), height: rem(18) }} />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                    {hasLinks && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            style={{
                                width: rem(16),
                                height: rem(16),
                                transform: opened
                                    ? "rotate(-90deg)"
                                    : "rotate(90deg)",
                            }}
                        />
                    )}
                </Group>
            </NavLink>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    );
}

const mockdata = {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
        { label: "Upcoming releases", link: "/" },
        { label: "Previous releases", link: "/" },
        { label: "Releases schedule", link: "/" },
    ],
};

export function NavbarLinksGroup() {
    return (
        <Box mih={220} p="md">
            <LinksGroup {...mockdata} />
        </Box>
    );
}
