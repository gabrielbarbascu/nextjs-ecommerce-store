import 'server-only';

export const products = [
  {
    id: 1,
    name: 'Sql',
    type: 'Injection',
    accesory: 'Database',
    icon: '💉',
  },
  {
    id: 2,
    name: 'Phishing',
    type: 'Attack',
    accesory: 'Fraudem',
    icon: '🐟',
  },
  {
    id: 3,
    name: 'Malware',
    type: 'Virus',
    accesory: 'Software',
    icon: '🪱',
  },
  {
    id: 4,
    name: 'Ddos',
    type: 'Traffic',
    accesory: 'Overwhelm',
    icon: '🚊',
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
