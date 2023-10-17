import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Product } from '../migrations/00000-createTableProduct';

export const products = [
  {
    id: 1,
    name: 'Sql',
    type: 'Injection',
    accessory: 'Database',
    icon: '💉',
  },
  {
    id: 2,
    name: 'Phishing',
    type: 'Attack',
    accessory: 'Fraudem',
    icon: '🐟',
  },
  {
    id: 3,
    name: 'Malware',
    type: 'Virus',
    accessory: 'Software',
    icon: '🪱',
  },
  {
    id: 4,
    name: 'Ddos',
    type: 'Traffic',
    accessory: 'Overwhelm',
    icon: '🚊',
  },
];
export function findProductById(id: number) {
  return products.find((product) => product.id === id);
}

export const getProducts = cache(async () => {
  // return products;
  const products = await sql<Product[]>`

  SELECT * FROM products
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
SELECT * FROM products WHERE id = ${id}

`;
  return product;
});

// export getprodbyid and export const prod needs //
