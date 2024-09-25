'use client';

import { getProducts } from '@/lib/actions/product.actions';
import { Product } from '@prisma/client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard ';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const SkeletonLoader = () => (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="flex h-36 animate-pulse flex-col items-center justify-center rounded-lg bg-gray-200 p-4"
        />
      ))}
    </div>
  );

  if (products?.length === 0 && !loading) return null;

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">أحدث المنتجات</h1>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
