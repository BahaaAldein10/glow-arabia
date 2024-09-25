import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

const Policy = () => {
  return (
    <>
      <div className="m-auto mt-12 max-w-5xl">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-sm font-medium text-gray-600 hover:underline"
        >
          <MoveLeft className="size-4" />
          <span>Back to home</span>
        </Link>
      </div>

      <div className="my-6 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-5xl rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-center text-2xl font-bold">
            Replacement and Refund Policy
          </h1>

          <section className="mb-6">
            <h2 className="text-base font-semibold">Replacement Policy</h2>
            <p className="mt-2">
              <strong>1-</strong> Without prejudice to the provisions of the
              warranty agreement and the regulations, the consumer has the right
              to replace the product provided to him from the store within the
              seven days following the date of receipt of the product, and he
              does not have the right to replace the product after the lapse of
              seven days.
            </p>
            <p className="mt-2">
              <strong>2-</strong> To replace the product, it is required that
              the product is in good condition and the consumer has not used the
              product or received its benefit, and the store has the right to
              inspect the product before replacing it to make sure of its safety
              and the consumer is responsible for paying the shipping value in
              case he wants to replace the product and in the international
              replacement, the consumer bears the full shipping costs and
              delivery of the product to the shipping company and in case of
              defects or error, the consumer will be compensated.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-semibold">
              The consumer has no right to replace the product in the following
              cases:
            </h2>
            <ol className="mt-2 list-inside list-decimal">
              <li>
                If the product was manufactured at the request of the consumer
                or according to specifications specified by him, products with a
                defect or that violated the specifications specified by the
                consumer are excluded from this.
              </li>
              <li>
                If the product consists of videos, CDs, CDs or information
                programs that have been used.
              </li>
              <li>
                If the product is newspapers, magazines, publications, books or
                other literature.
              </li>
              <li>
                If a defect appears in the product due to improper possession of
                the consumer.
              </li>
              <li>
                If the contract deals with the provision of accommodation,
                transportation or feeding services.
              </li>
              <li>
                If the contract deals with the purchase of software download
                products via the internet.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-semibold">Refund Policy</h2>
            <p className="mt-2">
              <strong>1-</strong> Without prejudice to the provisions of the
              warranty agreement and the regulations, the consumer has the right
              to terminate the contract and return the product provided to him
              from the store within the seven days following the date of receipt
              of the product, and he is not entitled to that product after the
              lapse of seven days.
            </p>
            <p className="mt-2">
              <strong>2-</strong> To return the product, it is required that the
              product is in good condition and the consumer has not used the
              product or received its benefit, and the store name has the right
              to inspect the product before returning it to make sure of its
              safety.
            </p>
            <p className="mt-2">
              <strong>3-</strong> The consumer shall bear the costs of the
              return process and in the case of international return, the
              consumer shall bear the full costs of shipping and delivery of the
              product to the shipping company, and in case of defects or error,
              the consumer will be compensated.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold">
              The consumer is not entitled to return the product in the
              following cases:
            </h2>
            <ol className="mt-2 list-inside list-decimal">
              <li>
                If the product was manufactured at the request of the consumer
                or according to specifications specified by him, products with a
                defect or that violated the specifications specified by the
                consumer are excluded from this.
              </li>
              <li>
                If the product consists of videos, CDs, CDs or information
                programs that have been used.
              </li>
              <li>
                If the product is newspapers, magazines, publications, books or
                other literature.
              </li>
              <li>
                If a defect appears in the product due to improper possession of
                the consumer.
              </li>
              <li>
                If the contract deals with the provision of accommodation,
                transportation or feeding services.
              </li>
              <li>
                If the contract deals with the purchase of software download
                products via the internet.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default Policy;
