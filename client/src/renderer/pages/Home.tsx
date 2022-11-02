import Navbar from 'renderer/modules/shared/components/Navbar/Navbar';
import CategoryDisplay from 'renderer/modules/shared/components/CategoryDisplay/CategoryDisplay';
import Billing from 'renderer/modules/home/components/Billing/Billing';
import { useState } from 'react';
import ProductListing from 'renderer/modules/home/components/ProductListing/ProductListing';
import Product from 'renderer/modules/shared/interfaces/product.interface';

function Home() {
  const [currentCat, setCurrentCat] = useState<number | null>(null);
  const [billToggle, setBillToggle] = useState(false);
  const [billProducts, setBillProducts] = useState<Product[] | null>(null);

  const onBillClick = () => {
    setBillToggle(!billToggle);
  }
  return (
    <div className="flex flex-row items-center justify-between h-full">
      <div className="z-0 w-full lg:w-[70%] h-full p-3 flex flex-col">
        <Navbar onBillingClick={onBillClick} />
        <CategoryDisplay
          onCatSelect={(cat) => setCurrentCat(cat)}
          selectedCat={currentCat}
          displayType={'Slider'}
        />
        <ProductListing onAddProduct={(product: Product) => {
          setBillProducts((prev) => {
            if (prev !== null) {
              return [ ...prev, product]
            }
            return [product]
          })
        }} currentCat={currentCat} />
      </div>

      <Billing
        productList={billProducts}
        billingModalOpened={billToggle}
        onBillToggle={onBillClick}
        responsiveClassName="hidden lg:block lg:w-[30%]"
        baseClassName="px-3 py-5 bg-white h-full border-l shadow-md"
      />
    </div>
  );
}

export default Home;
