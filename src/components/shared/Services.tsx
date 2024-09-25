import { features } from '@/constants';

const Features = () => {
  return (
    <section className="container mx-auto mb-12 mt-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {features.map(({ Icon, description, id, title }) => (
          <div
            key={id}
            className="flex flex-col items-center rounded-lg bg-white p-6 shadow-default"
          >
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary text-gray-600">
              <Icon className="size-8" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              {title}
            </h2>
            <p className="text-center font-semibold text-gray-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
