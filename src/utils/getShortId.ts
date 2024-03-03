export const getShortId = (id: string) => {
  return id.slice(0, 6) + "..." + id.slice(-4);
};
