type mapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: mapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMappped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMappped);
