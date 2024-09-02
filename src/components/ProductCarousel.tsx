// components/ProductCarousel.tsx
"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

// Definimos un tipo para nuestros productos
type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

// Datos de ejemplo para los productos
const products: Product[] = [
  {
    id: 1,
    name: "Macbook Pro",
    image: "https://placehold.co/400/000000/FFF",
    price: 29.99,
  },
  {
    id: 2,
    name: "Airpods Pro",
    image: "https://placehold.co/400/000000/FFF",
    price: 59.99,
  },
  {
    id: 3,
    name: "Ipad Pro",
    image: "https://placehold.co/400/000000/FFF",
    price: 89.99,
  },
  {
    id: 4,
    name: "Iphone Pro",
    image: "https://placehold.co/400/000000/FFF",
    price: 199.99,
  },
  {
    id: 5,
    name: "Apple Tv",
    image: "https://placehold.co/400/000000/FFF",
    price: 79.99,
  },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 text-white text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm">${product.price.toFixed(2)}</p>
                    <Button className="mt-2 bg-white text-black hover:bg-gray-200">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-200"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-gray-200"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>
    </div>
  );
}
