'use client';

import { BrandColumns } from '@/components/brands/BrandColumns';
import { BrandDataTable } from '@/components/brands/BrandDataTable';
import { ClientColumns } from '@/components/clients/ClientColumns';
import { ClientDataTable } from '@/components/clients/ClientDataTable';
import { ProductColumns } from '@/components/products/ProductColumns';
import { ProductDataTable } from '@/components/products/ProductDataTable';
import { getBrands } from '@/lib/actions/brand.actions';
import { getClients } from '@/lib/actions/client.actions';
import { getProducts } from '@/lib/actions/product.actions';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const AdminPage = () => {
  const [products, setProducts] = useState<
    {
      id: string;
      name: string;
      price: number;
      imageUrl: string;
      brandId: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >([]);
  const [brands, setBrands] = useState<
    {
      id: string;
      name: string;
      imageUrl: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >([]);
  const [clients, setClients] = useState<
    {
      id: string;
      name: string;
      imageUrl: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts || []);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    const fetchBrands = async () => {
      try {
        const fetchedBrands = await getBrands();
        setBrands(fetchedBrands || []);
      } catch (error) {
        console.error('Failed to fetch brands', error);
      }
    };

    const fetchClients = async () => {
      try {
        const fetchClients = await getClients();
        setClients(fetchClients || []);
      } catch (error) {
        console.error('Failed to fetch brands', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProducts(), fetchBrands(), fetchClients()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container my-6 space-y-6">
      <ProductDataTable columns={ProductColumns} data={products} />
      <BrandDataTable columns={BrandColumns} data={brands} />
      <ClientDataTable columns={ClientColumns} data={clients} />
    </div>
  );
};

export default AdminPage;
