import { useGetAllProducts, useGetProductsByCat } from '../../hooks';
import { useEffect, useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import { REJECTED } from 'renderer/modules/shared/lib/utils';
import ProductItem from '../UI/ProductItem/ProductItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from 'renderer/modules/shared/interfaces/product.interface';

interface Props {
  currentCat: any;
  onAddProduct: (product: Product) => void;
}

const ProductListing: React.FC<Props> = ({ currentCat, onAddProduct }) => {
  const [products, setProducts] = useState<any>(null);

  const {
    getProductsByCat,
    loading: prodsByCatLoading,
    status: prodsByCatStatus,
  } = useGetProductsByCat({
    onSuccess: (data: any) => setProducts(data),
  });
  const {
    getProducts,
    loading: allProdsLoading,
    status: allProdsStatus,
  } = useGetAllProducts({
    onSuccess: (data: any) => setProducts(data),
  });

  useEffect(() => {
    if (currentCat) {
      getProductsByCat(currentCat);
    } else {
      getProducts();
    }
  }, [currentCat]);

  if (allProdsLoading || prodsByCatLoading) {
    return <CircularProgress />;
  }
  if (prodsByCatStatus === REJECTED || allProdsStatus === REJECTED) {
    return <Alert severity="error">Something went wrong</Alert>;
  }
  //[257px_minmax(257px,_1fr)_minmax(257px,auto)]

  return (
    <div className="grid gap-4 grid-rows-auto max-w-full flex-1 overflow-y-auto ">
      <div className='grid gap-3 grid-rows-3 grid-flow-col overflow-x-auto p-3'>
        {products?.map((product: any) => (
          <ProductItem onItemClick={() => onAddProduct(product)} key={product.id} {...product} />
        ))}
      </div>
      {/* <div>{JSON.stringify(products)}</div> */}
    </div>
  );
};

export default ProductListing;
