"use client";

import { usePathname } from "next/navigation";
import GetMenuList from "@/constants/nav";

import { ScrollArea } from "../ui/scroll-area";
import Group from "./group";
import MenuItem from "./menuItem";
import SubMenu from "./submenu";

export function Menu() {
  const pathname = usePathname();
  const menuList = GetMenuList(pathname);

  return (
    <ScrollArea className="overflow-x-hidden px-2">
      <nav className="min-h-fit">
        <ul className="flex flex-col items-center justify-start space-y-1 capitalize">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className="w-full pt-4" key={index}>
              <Group groupLabel={groupLabel} />
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <MenuItem
                      href={href}
                      label={label}
                      Icon={Icon}
                      active={active}
                      key={index}
                    />
                  ) : (
                    <div className="w-full" key={index}>
                      <SubMenu
                        Icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                      />
                    </div>
                  ),
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}
