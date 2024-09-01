// components/Footer.tsx
"use client";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="font-semibold text-lg">Acme Tech</span>
          </Link>
          <p className="text-muted-foreground">
            Discover the latest tech products and accessories.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Shipping & Return Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            FAQ
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Categories</h3>
          <Link href="#" className="hover:underline" prefetch={false}>
            Laptops
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Smartphones
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Accessories
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Electronics
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Gaming
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Office
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Customer Support
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Careers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Press
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Partners
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Acme Tech. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
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
