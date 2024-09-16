"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { DEFAULT_TITLE } from "@/constants";

import { cn } from "@/lib/utils";
import useMobileNav from "@/hooks/useMobileNav";
import useSideBar from "@/hooks/useSideBar";

interface Props {
  logo?: boolean;
  mobile?: boolean;
}

export default function Brand({ logo = false, mobile = false }: Props) {
  const pathname = usePathname();
  const toggleIsOpen = useMobileNav()[1];
  const isMinimized = useSideBar()[0];

  const getHref = useCallback(() => {
    return pathname.split("/")[1] === "dashboard" ? "/dashboard" : "/";
  }, [pathname]);

  if (!logo) {
    return (
      <h2
        className="mx-3 text-center text-2xl font-extrabold uppercase text-primary lg:text-3xl"
        onClick={() => toggleIsOpen(false)}
      >
        <Link href={getHref()}>{DEFAULT_TITLE}</Link>
      </h2>
    );
  }
  return (
    <div
      className="flex flex-col items-center justify-center border-b border-neutral-200 text-center dark:border-neutral-800"
      onClick={() => toggleIsOpen(false)}
    >
      <Link
        href={getHref()}
        className="my-[11px] flex cursor-pointer items-center justify-center lg:my-[3px]"
      >
        <Image
          src={Logo}
          alt="logo"
          width={80}
          height={60}
          className={cn(
            "mx-2 block size-20 object-contain lg:size-24",
            mobile && "size-24",
          )}
        />
        <h1
          className={cn(
            "duration-800 whitespace-nowrap text-sm font-extrabold uppercase tracking-widest text-primary transition-all ease-in-out lg:hidden",
            mobile && "text-2xl",
            isMinimized
              ? "hidden -translate-x-96 opacity-0"
              : "translate-x-0 opacity-100",
          )}
        >
          {DEFAULT_TITLE}
        </h1>
      </Link>
    </div>
  );
}
