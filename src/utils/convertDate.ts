export const convertDate = (date: string) => {
  return date != undefined ? date.slice(2).replace("-", ".") : "";
};
