export const trimEllpsis = (word,length) => {
  return word.length > length ? word.substring(0, length) + "..." : word;
}
