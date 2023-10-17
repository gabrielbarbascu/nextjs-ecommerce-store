import { Sql } from 'postgres';

const products = [
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

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
   INSERT INTO products
   (name, type ,accessory)
   VALUES
   (${product.name}, ${product.type}, ${product.accessory} )

`;
  }
}

export async function down(sql: Sql) {}
