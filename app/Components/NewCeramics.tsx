import Image from "next/image";
import Link from "next/link";



interface Product {
  name: string;
  price: string;
  image: string; // URL of the product image
}

interface NewCeramicsProps {
  products: Product[];
}

export default function NewCeramics({ products }: NewCeramicsProps) {
  return (
    <section className="wrapper my-8 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">New Ceramics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link key={index} href="./details">
            <div className="w-full h-[375px] p-4 flex flex-col items-center bg-white shadow-md rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={305}
                height={375}
                className="object-cover rounded-md"
              />
              <h4 className="text-xl font-normal text-[#2A254B] mt-4">{product.name}</h4>
              <div className="text-lg font-normal text-[#2A254B]">{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center h-14 mt-14">
        <Link href="./productListing">
          <button className="px-6 py-2 bg-[#F9F9F9] rounded font-normal text-[#2A254B]">
            View Collection
          </button>
        </Link>
      </div>
    </section>
  );
}

