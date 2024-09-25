import { getProductsByBrand } from '@/lib/actions/product.actions';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import ProductCard from './ProductCard ';

const ProductBernard = async () => {
  const products = await getProductsByBrand({
    brandId: process.env.NEXT_PUBLIC_GEDIC!,
  });

  if (products?.length === 0) return;

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">Gedic أحدث منتجات</h1>

      <div className="mt-6 max-w-7xl">
        <Carousel>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductBernard;
