import { getProducts } from '@/lib/actions/product.actions';
import ProductCard from './ProductCard ';

const ProductList = async () => {
  const products = await getProducts();

  if (products?.length === 0) return;

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">أحدث المنتجات</h1>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
