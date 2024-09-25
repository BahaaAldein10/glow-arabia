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
import { deleteProduct, updateProduct } from '@/lib/actions/product.actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { Brand } from '@prisma/client';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
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
  brandId: z.string().nonempty({ message: 'Client must be selected' }),
});

type EditProductPageProps = {
  product?: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    brandId: string;
  };
  brands?: Brand[];
};

const EditProductPage = ({ product, brands }: EditProductPageProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product?.name || '',
      price: product?.price || 0,
      imageUrl: product?.imageUrl || '',
      brandId: product?.brandId || '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    if (product) {
      // Set the form's default values if product data is available
      reset(product);
    }
  }, [product, reset]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (product) {
        await updateProduct({
          id: product.id,
          name: values.name,
          price: values.price,
          imageUrl: values.imageUrl,
          brandId: values.brandId,
        });

        toast.success('Product updated');
        router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  }

  async function handleDelete() {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        if (product) {
          await deleteProduct({ id: product.id });
          toast.success('Product deleted');
          router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
        }
      } catch (error) {
        toast.error('Failed to delete product');
        console.error(error);
      }
    }
  }

  if (!product) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full max-w-xl p-6 md:items-center md:justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">Edit Product</h1>
        <p className="text-sm text-slate-600">
          Update the details of the product below.
        </p>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
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
                        {brands?.map((brand) => (
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
                  Back
                </Button>
              </Link>

              <Button
                type="button"
                onClick={handleDelete}
                variant="destructive"
                className="border-red-600 bg-red-600 font-semibold text-white transition"
              >
                Delete Product
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="border-primary bg-primary font-semibold text-gray-600 hover:text-gray-600"
              >
                {isSubmitting ? (
                  <div className="flex-center gap-2">
                    <Loader2 className="animate-spin" />
                    <span>Updating</span>
                  </div>
                ) : (
                  'Update Product'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditProductPage;
