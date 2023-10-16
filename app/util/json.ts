import sjson from 'secure-json-parse';
import { ProductComment } from '../products/[productId]/actions';

export function parseJson(
  stringifiedJson: string,
): ProductComment[] | undefined {
  if (!stringifiedJson) return undefined;
  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
