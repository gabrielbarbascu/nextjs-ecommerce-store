import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../database/products';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productid));
  console.log(singleProduct);
  return {
    title: singleProduct ? singleProduct.firstName : '',
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productid));

  if (!singleProduct) {
    return notFound();
  }
  return (
    <div>
      A SINGLE PROD PAGE
      <h1>{singleProduct.firstName}</h1>
      <Image
        src={`/images/${singleProduct.firstName}.png`}
        width={200}
        height={200}
        alt={singleProduct.firstName}
      />
    </div>
  );
}
