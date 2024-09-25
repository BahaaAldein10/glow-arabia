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
  deleteClient,
  getClientById,
  updateClient,
} from '@/lib/actions/client.actions';
import { ParamsProps } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
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
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be 50 characters or less' }),
  imageUrl: z.string().url({ message: 'Invalid image URL' }),
});

const EditClientPage = ({ params }: ParamsProps) => {
  const router = useRouter();
  const { id } = params;

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [client, setClient] = useState<{
    name: string;
    imageUrl: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
    },
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const clientData = await getClientById({ id });
        if (clientData) {
          setClient(clientData);
          reset(clientData);
        } else {
          setClient({ name: '', imageUrl: '' });
          reset({ name: '', imageUrl: '' });
        }
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch client', error);
        setLoading(false);
      }
    };

    fetchClient();
  }, [id, reset]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateClient({
        id,
        name: values.name,
        imageUrl: values.imageUrl,
      });

      toast.success('Client updated');

      router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  }

  async function handleDelete() {
    if (confirm('Are you sure you want to delete this client?')) {
      try {
        await deleteClient({ id });
        toast.success('Client deleted');
        router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
      } catch (error) {
        toast.error('Failed to delete client');
        console.error(error);
      }
    }
  }

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full max-w-xl p-6 md:items-center md:justify-center">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">Edit Client</h1>
        <p className="text-sm text-slate-600">
          Update the details of your client below.
        </p>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
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
                  Back
                </Button>
              </Link>

              <Button
                type="button"
                onClick={handleDelete}
                variant="destructive"
                className="border-red-600 bg-red-600 font-semibold text-white transition"
              >
                Delete Client
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
                  'Update Client'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditClientPage;