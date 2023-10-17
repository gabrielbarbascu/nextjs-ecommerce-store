import Image from 'next/image';
import { notFound } from 'next/navigation';
import { findProductById } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ProductCommentForm from './ProductCommentForm';

type Props = {
  params: {
    productId: string;
  };
};

export default async function SingleProductPage(props: Props) {
  const product = await findProductById(Number(props.params.productId));
  console.log(product);
  if (!product) {
    notFound();
  }

  const productsCommentsCookie = getCookie('productsComments');

  const productComments = !productsCommentsCookie
    ? []
    : parseJson(productsCommentsCookie);

  // Alternative to always have an array type
  // : parseJson(fruitsCommentsCookie) || [];

  const productCommentToDisplay = productComments?.find((productComment) => {
    return productComment.id === product.id;
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <div>{productCommentToDisplay?.comment}</div>
      <ProductCommentForm productId={product.id} />
      <Image
        src={`/images/${product.name}.png`}
        width={200}
        height={200}
        alt="describe"
      />
    </div>
  );
}
