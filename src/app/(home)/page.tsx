import BrandList from '@/components/shared/BrandList';
import ClientList from '@/components/shared/ClientList';
import ProductBernard from '@/components/shared/ProductBernard';
import ProductGedic from '@/components/shared/ProductGedic';
import ProductHypertherm from '@/components/shared/ProductHypertherm';
import ProductList from '@/components/shared/ProductList';
import Features from '@/components/shared/Services';
import dynamic from 'next/dynamic';

const DynamicLocations = dynamic(
  () => import('@/components/shared/Locations'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-tertiary">
      <BrandList />
      <ProductBernard />
      <ProductHypertherm />
      <ProductGedic />
      <ProductList />
      <ClientList />
      <DynamicLocations />
      <Features />
    </main>
  );
}
