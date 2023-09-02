export const validateRecentViewedCookieValue = (
  data: unknown,
): data is string[] => {
  return Boolean(data) &&
    typeof data === "object" &&
    Array.isArray(data) &&
    data.length > 0
    ? data.every((value) => {
        return typeof value === "string";
      })
    : true;
};
