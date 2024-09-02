// components/Footer.tsx
"use client";
import Link from "next/link";
import { SVGProps } from "react";
export default function Component() {
  return (
    <footer className="bg-[#171717] py-8 md:py-12 text-gray-300">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-white" />
            <span className="font-semibold text-lg text-white">Acme Tech</span>
          </Link>
          <p className="text-gray-400">
            Discover the latest tech products and accessories.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Shipping & Return Policy
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            FAQ
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-white">Categories</h3>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Laptops
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Smartphones
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Accessories
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Electronics
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Gaming
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Office
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-white">Contact</h3>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Customer Support
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Careers
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Press
          </Link>
          <Link
            href="#"
            className="hover:underline text-gray-300"
            prefetch={false}
          >
            Partners
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">
          &copy; 2024 Acme Tech. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="text-sm hover:underline text-gray-300"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm hover:underline text-gray-300"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
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
