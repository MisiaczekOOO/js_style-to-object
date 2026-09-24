'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

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
    stylesObject[temp[i][0]] = temp[i][1];
  }

  return stylesObject;
}

module.exports = convertToObject;
