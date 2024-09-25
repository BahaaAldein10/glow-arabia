export interface ParamsProps {
  params: { id: string };
}

export interface CreateProductParams {
  name: string;
  price: number;
  imageUrl: string;
  brandId: string;
}

export interface UpdateProductParams {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  brandId: string;
}

export interface DeleteProductParams {
  id: string;
}

export interface GetProductByBrandParams {
  brandId: string;
}

export interface CreateBrandParams {
  name: string;
  imageUrl: string;
}

export interface UpdateBrandParams {
  id: string;
  name: string;
  imageUrl: string;
}

export interface DeleteBrandParams {
  id: string;
}

export interface CreateClientParams {
  name: string;
  imageUrl: string;
}

export interface UpdateClientParams {
  id: string;
  name: string;
  imageUrl: string;
}

export interface DeleteClientParams {
  id: string;
}
