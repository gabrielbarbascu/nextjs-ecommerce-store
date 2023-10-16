import Link from 'next/link';
import { products } from '../../database/products';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default function ProductsPage() {
  const productsCommentsCookie = getCookie('productsComments');

  const productComments = !productsCommentsCookie
    ? []
    : parseJson(productsCommentsCookie);

  console.log(productComments);

  const productsWithComments = products.map((product) => {
    const matchingWithProductFromCookie = productComments?.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, comment: matchingWithProductFromCookie?.comment };
  });

  return (
    <div>
      <h1>Order yourself a cyber attack</h1>
      {products.map((product) => {
        return (
          <div
            key={`product-${product.id}`}
            data-test-id={`product-name-${product.name}`}
          >
            <Link href={`/products/${product.id}`}>
              <h1>
                {product.icon} {product.name}
              </h1>
            </Link>
            <div>{product.comment}</div>
          </div>
        );
      })}
    </div>
  );
}
