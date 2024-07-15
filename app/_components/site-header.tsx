import Link from "next/link";
import React from "react";
import { Logo } from "../_lib/icons";

export function SiteHeader() {
  return (
    <header className="top-0 z-40 w-full border-b border-zinc-600 bg-black">
      <div className="container mx-auto flex h-20 items-center justify-between space-x-4 sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center">
            <Logo className="h-auto w-9 text-[#00AEEF]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
