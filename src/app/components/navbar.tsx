// src/components/Navbar.tsx

import Image from "next/image";

export function Navbar() {
  return (
    <div className="flex absolute flex-row justify-between min-w-full px-15 py-4 bg-white dark:text- dark:bg-[hsla(0,0%,10%,0)] text-black dark:text-zinc-50 z-50">
      <Image
        className="dark:invert select-none pointer-events-none"
        src="/aistudio.svg"
        alt="Logo"
        width={29}
        height={20}
        priority
      />
      <nav className="flex items-center gap-5">
        <li className="list-none">
          <a
            href="#"
            className="px-4 py-2 bg-transparent border border-solid border-transparent rounded-2xl hover:bg-black/[0.04] dark:hover:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200 cursor-pointer"
          >
            Pricing
          </a>
        </li>
        <li className="list-none">
          <a
            href="#"
            className="px-4 py-2 bg-transparent border border-solid border-transparent rounded-2xl hover:bg-black/[0.04] dark:hover:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200 cursor-pointer"
          >
            Explore documentation
          </a>
        </li>
        <li className="list-none">
          <a
            href="#"
            className="px-4 py-2 bg-transparent border border-solid border-transparent rounded-2xl hover:bg-black/[0.04] dark:hover:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200 cursor-pointer"
          >
            Case studies
          </a>
        </li>
        <button className="px-4 py-2 bg-[hsl(0,0%,10%)] border border-solid border-black/[0.08] rounded-2xl hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200 cursor-pointer">
          Get Started
        </button>
      </nav>
    </div>
  );
}
