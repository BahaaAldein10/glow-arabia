import { getClients } from '@/lib/actions/client.actions';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import ClientCard from './ClientCard';

const ClientList = async () => {
  const clients = await getClients();

  if (clients?.length === 0) return;

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">عملائي</h1>

      <div className="m-auto mt-6 max-w-7xl">
        <Carousel autoScroll={true}>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientList;
