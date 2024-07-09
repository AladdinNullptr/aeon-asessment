export function strNullOrEmpty(str: string | null | undefined) {
  return str === null || str === undefined || str.trim() === "";
}

export function strEmptyOrInvalidNum(str: string | null | undefined) {
  return strNullOrEmpty(str) || isNaN(Number(str));
}
