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
import { createClient } from '@/lib/actions/client.actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be 50 characters or less' }),
  imageUrl: z.string().url({ message: 'Invalid image URL' }),
});

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createClient({
        name: values.name,
        imageUrl: values.imageUrl,
      });

      toast.success('Client created');

      router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  }

  return (
    <div className="mx-auto flex h-full max-w-xl p-6 md:items-center md:justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">Create a new client</h1>
        <p className="text-sm text-slate-600">
          Fill in the details of your new client below.
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
                    Client Name
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
                  'Create Client'
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
