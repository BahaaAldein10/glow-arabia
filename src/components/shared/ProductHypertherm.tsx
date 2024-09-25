'use client';

import { getProductsByBrand } from '@/lib/actions/product.actions';
import { Product } from '@prisma/client';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import ProductCard from './ProductCard ';

const ProductHypertherm = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByBrand({
          brandId: process.env.NEXT_PUBLIC_HYPERTHERM!,
        });
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
    <CarouselContent className="-ml-2 md:-ml-4">
      {[...Array(6)].map((_, index) => (
        <CarouselItem
          key={index}
          className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/4"
        >
          <div className="flex h-36 animate-pulse flex-col items-center justify-center rounded-lg bg-gray-200 p-4" />
        </CarouselItem>
      ))}
    </CarouselContent>
  );

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">Hypertherm أحدث منتجات</h1>

      <div className="mt-6 max-w-7xl">
        <Carousel>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <CarouselContent className="-ml-2 md:-ml-4">
              {products?.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/4"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          )}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductHypertherm;
