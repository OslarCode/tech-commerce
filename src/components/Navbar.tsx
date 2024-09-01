// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCyberpunkMode, setIsCyberpunkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const toggleCyberpunkMode = () => {
    setIsCyberpunkMode((prevMode) => !prevMode);
  };
  return (
    <header
      className={`flex h-16 w-full items-center justify-between bg-muted px-4 md:px-6 ${
        isDarkMode ? "dark" : ""
      } ${isCyberpunkMode ? "bg-[#0c0c0c] text-[#00ffff]" : ""}`}
    >
      {/* Logo */}
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Tech Store</span>
      </Link>
      {/* Links */}
      <nav className="hidden md:flex gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Store
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About us
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Input
            type="search"
            placeholder="Search products..."
            className="h-8 w-32 rounded-md bg-background pl-8 text-sm focus:w-48 focus:bg-muted focus:outline-none dark:bg-[#0c0c0c] dark:text-[#00ffff]"
          />
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-[#00ffff]" />
        </div>
        {/* Cart */}
        <Link href="#" className="relative" prefetch={false}>
          <ShoppingCartIcon className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            3
          </div>
        </Link>
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-muted-foreground hover:bg-muted dark:text-[#00ffff] dark:hover:bg-[#0c0c0c]"
        >
          <BellIcon className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            2
          </div>
        </Button>
        {/* Dark Mode */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className={`rounded-full ${
            isDarkMode
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>
        {/* Cyberpunk Mode */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCyberpunkMode}
          className={`rounded-full ${
            isCyberpunkMode
              ? "bg-[#00ffff] text-[#0c0c0c]"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          {isCyberpunkMode ? (
            <BoltIcon className="h-5 w-5" />
          ) : (
            <BoltIcon className="h-5 w-5" />
          )}
        </Button>
        {/* Sign in */}
        <Button variant="outline" className="hidden sm:inline-flex">
          Sign In
        </Button>
        {/* Sign up */}
        <Button className="hidden sm:inline-flex">Sign Up</Button>
        {/* Account */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Orders</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
