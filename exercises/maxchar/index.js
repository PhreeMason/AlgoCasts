// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  for (let letter of str) {
    chars[letter] = chars[letter]++ || 1
  }
  let highestVal = 0
  let mostPopular;
  for (let char in chars) {
    if (chars[char] > highestVal) {
      mostPopular = char
      highestVal = chars[char]
    }
  }
  return mostPopular
}

module.exports = maxChar;
