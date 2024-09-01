// components/Navbar.tsx
"use client";
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
  return (
    <header className="flex h-16 w-full items-center justify-between bg-[#171717] px-4 md:px-6 text-white">
      {/* Logo */}
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-gray-300" />
        <span className="text-lg font-bold text-gray-200">Tech Store</span>
      </Link>
      {/* Links */}
      <nav className="hidden md:flex gap-6">
        <Link
          href="#"
          className="text-sm font-medium text-gray-300 hover:underline underline-offset-4"
          prefetch={false}
        >
          Store
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-300 hover:underline underline-offset-4"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-300 hover:underline underline-offset-4"
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
            className="h-8 w-32 rounded-md bg-[#2c2c2c] pl-8 text-sm text-gray-200 focus:w-48 focus:bg-[#3d3d3d] focus:outline-none"
          />
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        {/* Cart */}
        <Link href="#" className="relative" prefetch={false}>
          <ShoppingCartIcon className="h-6 w-6 text-gray-300" />
          <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            3
          </div>
        </Link>

        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-300 hover:bg-[#2c2c2c] relative"
          >
            <BellIcon className="h-6 w-6" />
            <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </div>
          </Button>
        </div>
        {/* Sign in */}
        <Button
          variant="outline"
          className="hidden sm:inline-flex text-gray-300 border-gray-500"
        >
          Sign In
        </Button>
        {/* Sign up */}
        <Button className="hidden sm:inline-flex bg-primary text-white">
          Sign Up
        </Button>
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
