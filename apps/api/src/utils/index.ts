import { customAlphabet } from 'nanoid'

const nid = customAlphabet('0123456789abcdefghojklmnopqrstuvwxyz', 12)

export function createId(prefix?: string, size?: number) {
  return `${prefix ?? ''}${nid(size)}`
}
