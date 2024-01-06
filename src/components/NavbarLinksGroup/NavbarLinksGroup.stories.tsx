import type { Meta, StoryObj } from "@storybook/react";

import { LinksGroup } from "./NavbarLinksGroup.tsx";
import { IconSettings } from "@tabler/icons-react";

const meta: Meta<typeof LinksGroup> = {
    component: LinksGroup,
};

export default meta;
type Story = StoryObj<typeof LinksGroup>;

export const Default: Story = {
    args: {
        icon: IconSettings,
        label: "Settings",
        links: [
            { label: "Account", link: "/" },
            { label: "Privacy", link: "" },
        ],
    },
};
