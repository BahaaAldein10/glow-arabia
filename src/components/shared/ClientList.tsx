'use client';

import { getClients } from '@/lib/actions/client.actions';
import { Client } from '@prisma/client';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import ClientCard from './ClientCard';

const ClientList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clients = await getClients();
        setClients(clients || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const SkeletonLoader = () => (
    <CarouselContent className="-ml-2 md:-ml-4">
      {[...Array(6)].map((_, index) => (
        <CarouselItem
          key={index}
          className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
        >
          <div className="flex h-36 animate-pulse flex-col items-center justify-center rounded-lg bg-gray-200 p-4" />
        </CarouselItem>
      ))}
    </CarouselContent>
  );

  if (clients?.length === 0 && !loading) return null;

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">عملائي</h1>

      <div className="m-auto mt-6 max-w-7xl">
        <Carousel autoScroll={true}>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients?.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <ClientCard name={client.name} imageUrl={client.imageUrl} />
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

export default ClientList;
