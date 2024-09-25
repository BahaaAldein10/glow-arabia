import EditBrandPage from '@/components/shared/EditBrandPage';
import { getBrands } from '@/lib/actions/brand.actions';
import { ParamsProps } from '@/types';

export async function generateStaticParams() {
  const brands = await getBrands();

  return (
    brands?.map((brand) => ({
      id: brand.id,
    })) || []
  );
}

const EditBrandPageWrapper = async ({ params }: ParamsProps) => {
  return <EditBrandPage params={params} />;
};

export default EditBrandPageWrapper;
