import EditProductPage from '@/components/shared/EditProductPage';
import { getBrands } from '@/lib/actions/brand.actions';
import { getProductById, getProducts } from '@/lib/actions/product.actions';
import { ParamsProps } from '@/types';

export async function generateStaticParams() {
  const products = await getProducts();

  return (
    products?.map((product) => ({
      id: product.id,
    })) || []
  );
}

const EditProductPageWrapper = async ({ params }: ParamsProps) => {
  const productData = await getProductById({ id: params.id });
  const brands = await getBrands();

  return (
    <EditProductPage
      product={
        productData || {
          id: '',
          name: '',
          price: 0,
          imageUrl: '',
          brandId: '',
        }
      }
      brands={brands || []}
    />
  );
};

export default EditProductPageWrapper;
