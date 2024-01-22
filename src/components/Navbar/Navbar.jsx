import React from "react";
import logo from "../../assets/Logo-01.svg";
export default function Navbar() {
  return (
    <section class="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div class="ml-auto flex gap-4">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Contact Us
        </button>
      </div>
      <div class="flex w-full justify-center pl-40">
        <img width={180} src={logo} alt="logo" />
      </div>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:r1g:"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span class="sr-only">Toggle navigation menu</span>
      </button>
      <nav
        aria-label="Main"
        data-orientation="horizontal"
        dir="ltr"
        class="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:flex"
      >
        <div style={{ position: "relative" }}>
          <li
            data-orientation="horizontal"
            class="group justify-between  gap-8 flex flex-1 list-none items-center justify-center space-x-1"
            dir="ltr"
          >
            <a data-radix-collection-item="" href="/">
              About
            </a>
            <a data-radix-collection-item="" href="/">
              Features
            </a>
            <a data-radix-collection-item="" href="/">
              Pricing
            </a>
            <a data-radix-collection-item="" href="/">
              Contact
            </a>
          </li>
        </div>
        <div class="absolute left-0 top-full flex justify-center"></div>
      </nav>
    </section>
  );
}
