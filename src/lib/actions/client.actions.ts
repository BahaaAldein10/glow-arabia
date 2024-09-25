'use server';

import {
  CreateClientParams,
  DeleteClientParams,
  UpdateClientParams,
} from '@/types';
import prisma from '../prisma';

export async function createClient(params: CreateClientParams) {
  try {
    const { name, imageUrl } = params;

    const client = await prisma.client.create({
      data: {
        name,
        imageUrl,
      },
    });

    return client;
  } catch (error) {
    console.log(error);
  }
}

export async function getClients() {
  try {
    const clients = await prisma.client.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return clients;
  } catch (error) {
    console.log(error);
  }
}

export async function getClientById(params: DeleteClientParams) {
  try {
    const { id } = params;

    const client = await prisma.client.findUnique({
      where: { id },
    });

    return client;
  } catch (error) {
    console.log(error);
  }
}

export async function updateClient(params: UpdateClientParams) {
  try {
    const { id, imageUrl, name } = params;
    const clients = await prisma.client.update({
      where: {
        id,
      },
      data: {
        name,
        imageUrl,
      },
    });

    return clients;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClient(params: DeleteClientParams) {
  try {
    const { id } = params;

    const client = await prisma.client.delete({
      where: {
        id,
      },
    });

    return client;
  } catch (error) {
    console.log(error);
  }
}
