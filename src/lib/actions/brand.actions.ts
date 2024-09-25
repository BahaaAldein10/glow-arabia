'use server';

import {
  CreateBrandParams,
  DeleteBrandParams,
  UpdateBrandParams,
} from '@/types';
import prisma from '../prisma';

export async function createBrand(params: CreateBrandParams) {
  try {
    const { name, imageUrl } = params;

    const brand = await prisma.brand.create({
      data: {
        name,
        imageUrl,
      },
    });

    return brand;
  } catch (error) {
    console.log(error);
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return brands;
  } catch (error) {
    console.log(error);
  }
}

export async function getBrandById(params: DeleteBrandParams) {
  try {
    const { id } = params;

    const brand = await prisma.brand.findUnique({
      where: { id },
    });

    return brand;
  } catch (error) {
    console.log(error);
  }
}

export async function updateBrand(params: UpdateBrandParams) {
  try {
    const { id, imageUrl, name } = params;
    const brands = await prisma.brand.update({
      where: {
        id,
      },
      data: {
        name,
        imageUrl,
      },
    });

    return brands;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBrand(params: DeleteBrandParams) {
  try {
    const { id } = params;

    const brand = await prisma.brand.delete({
      where: {
        id,
      },
    });

    return brand;
  } catch (error) {
    console.log(error);
  }
}
