import ProductGrid from "@/components/ProductGrid";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#171717] text-white p-4">
        <ProductGrid />
        <ProductCarousel />
      </main>
    </>
  );
}
