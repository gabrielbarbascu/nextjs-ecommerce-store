'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type ProductComment = {
  id: number;
  comment: string;
};

export async function createOrUpdateComment(
  productId: number,
  comment: string,
) {
  // 1. get the current cookie
  const productsCommentsCookie = getCookie('productsComments');
  // 2. parse the cookie value

  // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined
  const productComments = !productsCommentsCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(productsCommentsCookie) || [];

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const productToUpdate = productComments.find((productComment) => {
    return productComment.id === productId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (productToUpdate) {
    productToUpdate.comment = comment;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    productComments.push({
      id: productId,
      comment: comment,
    });
  }

  // 4. we override the cookie
  await cookies().set('productsComments', JSON.stringify(productComments));
}
