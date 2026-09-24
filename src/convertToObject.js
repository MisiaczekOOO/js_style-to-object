'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // sourceString = sourceString.trim();

  const temp = sourceString.split(';').map((word) => {
    const [key, value] = word.split(':');

    if (key && value) {
      return [key.trim(), value.trim()];
    }
  });

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === undefined) {
      continue;
    }
    result[temp[i][0]] = temp[i][1];
  }

  return result;
}

module.exports = convertToObject;
