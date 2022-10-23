import { useLazyQuery } from "@apollo/client"
import { GetProductsByCategoryDocument, GetProductsDocument } from "renderer/graphql/generated"
import { useState } from 'react';
import { FULFILLED, IDLE, REJECTED } from "renderer/modules/shared/lib/utils";

export const useGetProductsByCat = ({ onSuccess }: any) => {
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<string>(IDLE);
  const [getProductsByCat, { data, loading }] = useLazyQuery(GetProductsByCategoryDocument, {
    onCompleted: (data) => {
      if (data && data.productsByCategory) {
        setStatus(FULFILLED);
        onSuccess(data.productsByCategory);
      } else {
        setStatus(REJECTED);
      }
    },
    onError: (error) => {
      setError(error.message || 'Something went wrong');
      setStatus(REJECTED);
    }
  });


  const getProductListByCat = async (cat: any) => {
    const response = await getProductsByCat({
      variables: { catId: cat.id }
    })

    if (response.data?.productsByCategory) {
      return response.data?.productsByCategory;
    }
  }
  return {
    getProductsByCat: getProductListByCat,
    data,
    error,
    status,
    loading,
  }
}
export const useGetAllProducts = ({ onSuccess }: any) => {
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<string>(IDLE);
  const [getAllProducts, { data, loading }] = useLazyQuery(GetProductsDocument, {
    onCompleted: (data) => {
      if (data && data.products) {
        setStatus(FULFILLED);
        onSuccess(data.products)
      } else {
        setStatus(REJECTED);
      }
    },
    onError: (error) => {
      setError(error.message || 'Something went wrong');
      setStatus(REJECTED);
    }
  });


  const getProductList = async () => {
    const response = await getAllProducts()

    if (response.data?.products) {
      return response.data?.products;
    }
  }
  return {
    getProducts: getProductList,
    data,
    error,
    status,
    loading,
  }
}
