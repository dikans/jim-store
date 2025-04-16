import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
};

export function ProductCard({ id, name, price, image, category, isNew = false }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-900">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-2 right-2 bg-primary px-2 py-1 text-xs font-medium text-white rounded">
            New
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <button className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs text-gray-500">{category}</p>
        <h3 className="mt-1 text-sm font-medium text-gray-200">
          <Link href={`/products/${id}`}>
            <span className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-semibold text-white">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
