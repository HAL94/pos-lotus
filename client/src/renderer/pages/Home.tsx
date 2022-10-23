import Navbar from 'renderer/modules/shared/components/Navbar/Navbar';
import CategoryDisplay from 'renderer/modules/shared/components/CategoryDisplay/CategoryDisplay';
import Billing from 'renderer/modules/home/components/Billing/Billing';
import { useState, useEffect } from 'react';
import ProductListing from 'renderer/modules/home/components/ProductListing/ProductListing';

function Home() {
  const [currentCat, setCurrentCat] = useState<number | null>(null);
  useEffect(() => {
    console.log('currentCat', currentCat)
  }, [currentCat])
  return (
    <div className="flex flex-row items-center justify-between h-full">
      <div className="z-0 w-[79%] h-full p-3">
        <Navbar />
        <CategoryDisplay onCatSelect={(cat) => setCurrentCat(cat)} selectedCat={currentCat} displayType={'Slider'} />
        <ProductListing currentCat={currentCat} />
      </div>
      <div className="w-[20%] px-3 py-5 bg-white h-full border-l shadow-md">
        <Billing />
      </div>
    </div>
  );
}

export default Home;
