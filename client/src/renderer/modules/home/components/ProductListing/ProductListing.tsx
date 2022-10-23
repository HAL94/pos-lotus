import { useGetAllProducts, useGetProductsByCat } from '../../hooks';
import { useEffect, useState } from 'react';
import { Alert, CircularProgress } from '@mui/material';
import { REJECTED } from 'renderer/modules/shared/lib/utils';
import ProductItem from '../UI/ProductItem/ProductItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface Props {
  currentCat: any;
}

const ProductListing: React.FC<Props> = ({ currentCat }) => {
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
  // grid-flow-col
  // grid-rows-auto grid-flow-col auto-cols-min auto-rows-max
  //grid-rows-4
  //auto-rows-[200px] auto-cols-[minmax(200px, _1fr)]
  return (
    <div className="grid gap-4 grid-rows-4 grid-flow-col max-w-full overflow-x-auto p-3 h-[calc(1037px-260px)]">
      {products?.map((product: any) => (
        <ProductItem key={product.id} {...product} />
      ))}
      {/* <div>{JSON.stringify(products)}</div> */}
    </div>
  );
};

export default ProductListing;
