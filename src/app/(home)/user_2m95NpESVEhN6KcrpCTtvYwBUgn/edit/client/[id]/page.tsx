import EditClientPage from '@/components/shared/EditClientPage';
import { getClients } from '@/lib/actions/client.actions';
import { ParamsProps } from '@/types';

export async function generateStaticParams() {
  const clients = await getClients();

  return (
    clients?.map((client) => ({
      id: client.id,
    })) || []
  );
}

const EditClientPageWrapper = async ({ params }: ParamsProps) => {
  return <EditClientPage params={params} />;
};

export default EditClientPageWrapper;
