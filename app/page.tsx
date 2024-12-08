
import Hero from "./Components/Hero";
import Fearture from "./Components/Fearture";
import NewCeramics from "./Components/NewCeramics";
import PopularProducts from "./Components/PopularProducts";
import JoinClub from "./Components/JoinClub";
import LondonStudio from "./Components/LondonStudio";


export const newCeramicsData = [
  { name: 'The Dandy chair', price: '$250', image: '/Chair.png' },
  { name: 'Rustic Vase Set', price: '$155', image: '/vaseSet.png' },
  { name: 'The Silky Vase', price: '$125', image: '/Vase.png' },
  { name: 'The Lucy Lamp', price: '$399', image: '/Lamp.png' },
];
export const popularProductsData = [
  { name: 'The Poplar suede sofa', price: '$980', image: '/Sofa.png',imageWidth:305,imageHeight:575 },
  { name: 'The Dandy chair', price: '$250', image: '/Chair.png' ,imageWidth:305,imageHeight:375},
  { name: 'The Dandy chair', price: '$250', image: '/Chair2.png',imageWidth:305,imageHeight:375 },
];

export default function Home() {
  
  return (
    <main>
      
      <Hero />
      <Fearture />
      <NewCeramics products={newCeramicsData} />
      <PopularProducts products={popularProductsData} />
      <JoinClub />
      <LondonStudio />
      
    </main>
  );
}
