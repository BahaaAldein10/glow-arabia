'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getBrands } from '@/lib/actions/brand.actions';
import { createProduct } from '@/lib/actions/product.actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { Brand } from '@prisma/client';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  price: z.coerce
    .number()
    .positive({ message: 'Price must be a positive number' }),
  imageUrl: z.string().url({ message: 'Invalid image URL' }),
  brandId: z.string().min(1, { message: 'Brand must be selected' }),
});

const CreatePage = () => {
  const router = useRouter();
  const [brands, setBrands] = useState<Brand[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: 0 || undefined,
      imageUrl: '',
      brandId: '',
    },
  });

  useEffect(() => {
    async function fetchBrands() {
      const fetchedBrands = await getBrands();

      // Fallback to an empty array if fetchedBrands is undefined
      setBrands(fetchedBrands ?? []);
    }

    fetchBrands();
  }, []);

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createProduct({
        name: values.name,
        price: values.price,
        brandId: values.brandId,
        imageUrl: values.imageUrl,
      });

      toast.success('Product created');

      router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  }

  return (
    <div className="mx-auto flex h-full max-w-xl p-6 md:items-center md:justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">Create a new product</h1>
        <p className="text-sm text-slate-600">
          Fill in the details of your new product below.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-black">
                    Product Name
                  </FormLabel>
                  <FormControl>
                    <Input className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-black">
                    Product Price
                  </FormLabel>
                  <FormControl>
                    <Input type="number" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-black">
                    Image URL
                  </FormLabel>
                  <FormControl>
                    <Input className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brandId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-black">
                    Brand
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map((brand) => (
                          <SelectItem key={brand.id} value={brand.id}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Link href={`/${process.env.NEXT_PUBLIC_USERID!}`}>
                <Button variant="ghost" type="button">
                  Cancel
                </Button>
              </Link>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="border-primary bg-primary font-semibold text-gray-600 hover:text-gray-600"
              >
                {isSubmitting ? (
                  <div className="flex-center gap-2">
                    <Loader2 className="animate-spin" />
                    <span>Creating</span>
                  </div>
                ) : (
                  'Create Product'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
