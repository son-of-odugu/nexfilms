import {
  ConeIcon,
  Film,
  LayoutDashboardIcon,
  Mail,
  Phone,
  SmilePlusIcon,
} from "lucide-react";

import { MenuGroup } from "@/types/nav";
import Icons from "@/components/icons";

export default function GetMenuList(pathname: string): MenuGroup[] {
  const dashboard = pathname.split("/")[1] === "dashboard";
  const getActive = (path: string) => {
    const currentPath = pathname.split("/").slice(-1)[0];
    return path === currentPath;
  };

  if (dashboard) {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: getActive("dashboard"),
            icon: LayoutDashboardIcon,
            submenus: [],
          },
          {
            href: "/dashboard/movies",
            label: "movies",
            active: getActive("movies"),
            icon: Film,
            submenus: [],
          },
          {
            href: "/dashboard/animations",
            label: "animations",
            active: getActive("animations"),
            icon: ConeIcon,
            submenus: [],
          },
          {
            href: "/dashboard/series",
            label: "series",
            active: getActive("series"),
            icon: SmilePlusIcon,
            submenus: [],
          },
        ],
      },
    ];
  }

  return [
    {
      groupLabel: "menu",
      menus: [
        {
          href: "",
          label: "videos",
          active: false,
          icon: Film,
          submenus: [
            {
              href: "/movies",
              label: "movies",
              active: getActive("movies"),
            },
            {
              href: "/series",
              label: "series",
              active: getActive("series"),
            },
            {
              href: "/animations",
              label: "animations",
              active: getActive("animations"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "socials",
      menus: [
        {
          href: "#",
          label: "instagram",
          active: false,
          icon: Icons["instagram"],
          submenus: [],
        },
        {
          href: "#",
          label: "youtube",
          active: false,
          icon: Icons["youtube"],
          submenus: [],
        },
        {
          href: "#",
          label: "x",
          active: false,
          icon: Icons["twitterX"],
          submenus: [],
        },
        {
          href: "#",
          label: "tiktok",
          active: false,
          icon: Icons["tiktok"],
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "contacts",
      menus: [
        {
          href: "",
          label: "email",
          active: false,
          icon: Mail,
          submenus: [
            {
              href: "",
              label: "emmanuelztrd@gmail.com",
              active: false,
            },
          ],
        },
        {
          href: "#",
          label: "phone",
          active: false,
          icon: Phone,
          submenus: [
            {
              href: "",
              label: "08108700025",
              active: false,
            },
          ],
        },
        {
          href: "#",
          label: "github",
          active: false,
          icon: Icons["gitHub"],
          submenus: [],
        },
      ],
    },
  ];
}
