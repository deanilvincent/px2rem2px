const { pxToRem, remToPx } = require("./index.js");

it("Should return correct rem value from pxToRem", () => {
  const value = 3;
  expect(pxToRem(value)).toBe("0.188rem");
});

it("Should return correct rem value - pxToRem", () => {
  const value = 4;
  expect(pxToRem(value)).toBe("0.250rem");
});

it("Should return correct rem value from string value - pxToRem", () => {
  const value = "4";
  expect(pxToRem(value)).toBe("0.250rem");
});

it("Should return correct rem value from string value with decimal- pxToRem", () => {
  const value = "4.00";
  expect(pxToRem(value)).toBe("0.250rem");
});

it("Should return correct rem value from string value with decimal- pxToRem", () => {
  const value = "3.33";
  expect(pxToRem(value)).toBe("0.208rem");
});

it("Should return correct rem value from decimal- pxToRem", () => {
  const value = 3.33;
  expect(pxToRem(value)).toBe("0.208rem");
});

it("Should return correct rem value from string value with number and text char - pxToRem", () => {
  const value = "3sdfasdfa";
  expect(pxToRem(value)).toBe("0.188rem");
});

it("Should return correct rem value from string value with number and text - pxToRem", () => {
  const value = "25px";
  expect(pxToRem(value)).toBe("1.563rem");
});

it("Should return undefined if value is empty - pxToRem", () => {
  expect(pxToRem()).toBe(undefined);
});

// ----------------------------------------- REM TO PX
it("Should return correct rem value from remToPx", () => {
  const value = 3;
  expect(remToPx(value)).toBe("48px");
});

it("Should return correct rem value from string value - remToPx", () => {
  const value = "3";
  expect(remToPx(value)).toBe("48px");
});

it("Should return correct rem value from string value with decimal- remToPx", () => {
  const value = "3.00";
  expect(remToPx(value)).toBe("48px");
});

it("Should return correct rem value from string value with decimal- remToPx", () => {
  const value = "3.33";
  expect(remToPx(value)).toBe("53.28px");
});

it("Should return correct rem value from decimal- remToPx", () => {
  const value = 3.33;
  expect(remToPx(value)).toBe("53.28px");
});

it("Should return correct rem value from string value with number and text char - remToPx", () => {
  const value = "3sdfasdfa";
  expect(remToPx(value)).toBe("48px");
});

it("Should return correct rem value from string value with number and text - remToPx", () => {
  const value = "3rem";
  expect(remToPx(value)).toBe("48px");
});

it("Should return undefined if value is empty - remToPx", () => {
  expect(remToPx()).toBe(undefined);
});
