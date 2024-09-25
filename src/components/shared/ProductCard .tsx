import { Product } from '@prisma/client';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <div className="rounded-lg bg-white shadow">
        {/* Image section */}
        <div className="relative h-[250px] w-full overflow-hidden rounded-t-lg bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={`Image of ${product.name}`}
            fill
            className="m-auto object-contain"
            loading="lazy"
            quality={85}
          />
        </div>

        {/* Product details */}
        <div className="flex h-[116px] flex-col justify-between p-5">
          <h3
            className="line-clamp-2 text-base font-semibold text-gray-900"
            title={product.name}
          >
            {product.name}
          </h3>
          <p className="mt-1 text-base font-bold text-gray-600">
            {product.price} SAR
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
