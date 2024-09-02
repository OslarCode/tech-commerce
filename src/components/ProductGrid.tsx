// components/ProductGrid.tsx
"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-3 md:grid-rows-2 gap-4 p-4 bg-[#171717]">
      {/* Card 1: Ocupa 1 columna en pantallas pequeñas y 3 columnas en pantallas grandes, más alta */}
      <div className="relative col-span-1 md:col-span-3 row-span-1 md:row-span-2 h-80 md:h-[655px] bg-black rounded-lg overflow-hidden group">
        <Image
          src="/products/AppleIphone.png" // Reemplaza con la ruta de tu imagen
          alt="Product 1"
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-black text-white p-2">
            Acme Circles T-Shirt
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white p-2 ml-2"
          >
            $20.00 USD
          </Badge>
        </div>
      </div>

      {/* Card 2: Ocupa 1 columna en pantallas pequeñas y 2 columnas en pantallas grandes */}
      <div className="relative col-span-1 md:col-span-2 row-span-1 h-60 md:h-80 bg-black rounded-lg overflow-hidden group">
        <Image
          src="/products/AppleWatch.png" // Reemplaza con la ruta de tu imagen
          alt="Product 2"
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-black text-white p-2">
            Acme Smart Watch
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white p-2 ml-2"
          >
            $300.00 USD
          </Badge>
        </div>
      </div>

      {/* Card 3: Ocupa 1 columna en pantallas pequeñas y 2 columnas en pantallas grandes */}
      <div className="relative col-span-1 md:col-span-2 row-span-1 h-60 md:h-80 bg-black rounded-lg overflow-hidden group">
        <Image
          src="/products/AppleAirpodsMaxPink.png" // Reemplaza con la ruta de tu imagen
          alt="Product 3"
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-black text-white p-2">
            Acme Cup
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white p-2 ml-2"
          >
            $15.00 USD
          </Badge>
        </div>
      </div>
    </div>
  );
}
