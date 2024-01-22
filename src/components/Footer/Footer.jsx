import React from "react";
import logo from "../../assets/Logo-01.svg";
export default function Footer() {
  return (
    <div class=" ">
      <footer class="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <nav class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            class="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300"
            href="#"
          >
            Home
          </a>
          <a
            class="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300"
            href="#"
          >
            About
          </a>
          <a
            class="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300"
            href="#"
          >
            Services
          </a>
          <a
            class="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300"
            href="#"
          >
            Portfolio
          </a>
          <a
            class="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300"
            href="#"
          >
            Contact
          </a>
        </nav>
        <div className="flex flex-col justify-between gap-4 items-center ">
          <div>
            <img src={logo} width={184} alt="logo" />
          </div>
          <div class="flex space-x-4 mt-4 sm:mt-0">
            <a class="text-gray-700 dark:text-gray-300" href="#">
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-700 dark:text-gray-300" href="#">
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a class="text-gray-700 dark:text-gray-300" href="#">
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a class="text-gray-700 dark:text-gray-300" href="#">
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div class="mt-4 sm:mt-0 text-sm text-gray-700 dark:text-gray-300">
          © 2024 Serb El-Jezeera. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
