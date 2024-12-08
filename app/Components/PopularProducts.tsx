import Image from "next/image";



interface Product {
  name: string;
  price: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

interface PopularProductsProps {
  products: Product[];
}

export default function PopularProducts({ products }: PopularProductsProps) {
  return (
    <section className="wrapper my-8 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Our Popular Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full h-auto p-4 flex flex-col items-center bg-white shadow-md rounded-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={product.imageWidth}
              height={product.imageHeight}
              className="object-cover rounded-md"
            />
            <h4 className="text-xl font-normal text-[#2A254B] mt-4">{product.name}</h4>
            <div className="text-lg font-normal text-[#2A254B]">{product.price}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-[#F9F9F9] rounded font-normal text-[#2A254B]">
          View Collection
        </button>
      </div>
    </section>
  );
}

