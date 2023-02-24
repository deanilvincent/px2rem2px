const pxToRem = (value) => {
  if (!value) return undefined;
  value = parseFloat(value);
  return `${(0.0625 * value).toFixed(3)}rem`;
};

const remToPx = (value) => {
  if (!value) return undefined;
  value = parseFloat(value);
  return `${value * 16}px`;
};

module.exports = { pxToRem, remToPx };
