import { getBrands } from '@/lib/actions/brand.actions';

export default async function Home() {
  const brands = await getBrands();

  return (
    <main>
      {brands?.map((brand, index) => <li key={index}>{brand.name}</li>)}
    </main>
  );
}
