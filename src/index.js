module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  const reversedStr = str.split('').reverse().join('');
  return Number(reversedStr);
};
