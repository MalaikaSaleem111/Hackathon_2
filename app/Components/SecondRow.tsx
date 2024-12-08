import Image from "next/image";



const secondRowProducts = [
  {
    id: 1,
    title: "The Luxe Lamp",
    price: "$180",
    image: "/product1.png",
    alt: "Lamp Collection",
  },
  {
    id: 2,
    title: "The Sleek Vase",
    price: "$145",
    image: "/product2.png",
    alt: "Minimal Vase",
  },
  {
    id: 3,
    title: "The Stylish Stool",
    price: "$120",
    image: "/product3.png",
    alt: "Stool Set",
  },
  {
    id: 4,
    title: "The Modern Chair",
    price: "$200",
    image: "/product4.png",
    alt: "Modern Chair",
  },
];

const SecondRow = () => {
  return (
    <div className="wrapper my-8 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {secondRowProducts.map((product) => (
          <div
            key={product.id}
            className="w-full h-auto p-4 flex flex-col items-center bg-white shadow-md rounded-lg"
          >
            <Image
              src={product.image}
              alt={product.alt}
              width={305}
              height={375}
              className="object-cover rounded-md"
            />
            <h3 className="text-xl font-normal text-[#2A254B] mt-4">{product.title}</h3>
            <p className="text-lg font-normal text-[#2A254B]">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondRow;

