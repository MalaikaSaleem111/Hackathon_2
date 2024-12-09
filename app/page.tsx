
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

export default function Home() {
  
  return (
    <main>
      
      <Hero />
      <Fearture />
      <NewCeramics products={newCeramicsData} />
      <PopularProducts  />
      <JoinClub />
      <LondonStudio />
      
    </main>
  );
}
