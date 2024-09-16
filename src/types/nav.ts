import React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { z } from "zod";

import { Menu } from "../components/navigation/menu";

type SVGProps = Omit<LucideProps, "size">;

export const iconSchema = z.union([
  z.custom<React.FC<SVGProps>>(),
  z.custom<LucideIcon>(),
]);

export const submenuSchema = z.object({
  href: z.string(),
  label: z.string(),
  active: z.boolean(),
});

export const menuSchema = z.object({
  href: z.string(),
  label: z.string(),
  active: z.boolean(),
  icon: iconSchema,
  submenus: z.array(submenuSchema),
});

export const menuGroupSchema = z.object({
  groupLabel: z.string(),
  menus: z.array(menuSchema),
});

export type Icon = z.infer<typeof iconSchema>;
export type Menu = z.infer<typeof menuSchema>;
export type Submenu = z.infer<typeof submenuSchema>;
export type MenuGroup = z.infer<typeof menuGroupSchema>;
