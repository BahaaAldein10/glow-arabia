'use server';

import {
  CreateProductParams,
  DeleteProductParams,
  GetProductByBrandParams,
  UpdateProductParams,
} from '@/types';
import prisma from '../prisma';

export async function createProduct(params: CreateProductParams) {
  try {
    const { name, price, imageUrl, brandId } = params;

    const product = await prisma.product.create({
      data: {
        name,
        price,
        brandId,
        imageUrl,
      },
    });

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const product = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 28,
    });

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(params: DeleteProductParams) {
  try {
    const { id } = params;

    const product = await prisma.product.findUnique({
      where: { id },
    });

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsByBrand(params: GetProductByBrandParams) {
  try {
    const { brandId } = params;

    const product = await prisma.product.findMany({
      where: { brandId },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(params: UpdateProductParams) {
  try {
    const { id, imageUrl, price, name, brandId } = params;
    const products = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        brandId,
        imageUrl,
      },
    });

    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(params: DeleteProductParams) {
  try {
    const { id } = params;

    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  } catch (error) {
    console.log(error);
  }
}
