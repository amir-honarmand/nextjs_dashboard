export const errorHandler = (e: any): string => {
  let first_obj = e?.response?.data && Object.values(e.response.data);
  let second_obj =
    Array.isArray(first_obj) && typeof first_obj[0] === "object"
      ? Object.values(first_obj[0])
      : first_obj && Object.values(first_obj);
  let value = Array.isArray(second_obj)
    ? second_obj[0]?.toString()
    : second_obj;

  return value ?? e.message;
};
