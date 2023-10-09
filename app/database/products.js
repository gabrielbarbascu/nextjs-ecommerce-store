import 'server-only';

const products = [
  { id: 1, firstName: 'sql', type: 'Injection', accesory: 'Database' },
  { id: 2, firstName: 'phishing', type: 'Attack', accesory: 'Fraudem' },
  { id: 3, firstName: 'malware', type: 'Virus', accesory: 'Software' },
  { id: 4, firstName: 'ddos', type: 'Traffic', accesory: 'Overwhelm' },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
