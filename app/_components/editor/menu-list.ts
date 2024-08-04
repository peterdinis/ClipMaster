import { Users, Settings, LayoutGrid, LucideIcon } from "lucide-react";

type Submenu = {
  label: string;
  active: boolean;
  submenus?: Submenu[];
};

type Menu = {
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Effects",
      menus: [
        {
          label: "Effects",
          active: pathname.includes("/effects"),
          icon: Users,
          submenus: [
            {
              label: "Color Correction",
              active: pathname.includes("/effects/color"),
              submenus: [
                {
                  label: "Blue Color",
                  active: pathname === "/effects/color/blue"
                },
                {
                  label: "Red Color",
                  active: pathname === "/effects/color/red"
                }
              ]
            },
            {
              label: "Filters",
              active: pathname === "/effects/filters"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          label: "Users",
          active: pathname.includes("/users"),
          icon: Users,
          submenus: []
        },
        {
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}