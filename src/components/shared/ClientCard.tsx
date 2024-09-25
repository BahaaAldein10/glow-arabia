import Image from 'next/image';

interface ClientCardProps {
  name: string;
  imageUrl: string;
}

const ClientCard = ({ name, imageUrl }: ClientCardProps) => {
  return (
    <div className="flex-center flex h-40 w-full select-none rounded-md bg-white p-4 shadow">
      <div className="relative size-40">
        <Image src={imageUrl} alt={name} fill className="object-contain" />
      </div>
    </div>
  );
};

export default ClientCard;
