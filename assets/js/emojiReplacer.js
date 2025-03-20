/**
 * emojiReplacer.js
 *
 * This file dynamically replaces emoji characters in an HTML string with corresponding
 * <img> tags referencing the Google Fonts Noto Color Emoji PNG images.
 *
 * It maps all emoji characters by computing their Unicode code points and generating
 * a URL based on a template.
 *
 * NOTE: Replace the base URL in getEmojiUrl() with the actual URL where your Noto Color Emoji images are hosted.
 */

/**
 * Returns the URL for the given emoji character based on its Unicode code points.
 * @param {string} emoji - The emoji character.
 * @returns {string} The URL for the corresponding PNG image.
 */
function getEmojiUrl(emoji) {
  // Convert the emoji to its Unicode code points in hex and join them with a dash.
  const codePoints = Array.from(emoji).map(ch => ch.codePointAt(0).toString(16));
  const codeStr = codePoints.join('-');
  // Update the base URL to point to your actual Noto Color Emoji images.
  return `https://fonts.gstatic.com/s/e/notoemoji/latest/${codeStr}/128.png`;
}

/**
 * Replaces all emoji characters in the provided HTML string with <img> tags.
 * Uses Unicode property escapes to match emoji.
 * @param {string} html - The HTML string to process.
 * @returns {string} The processed HTML string with emojis replaced by <img> tags.
 */
function replaceEmojis(html) {
  // This regex matches characters with the Extended_Pictographic Unicode property,
  // which covers the majority of emoji.
  const emojiRegex = /(\p{Extended_Pictographic})/gu;
  return html.replace(emojiRegex, (match) => {
    const url = getEmojiUrl(match);
    return `<img src="${url}" alt="${match}" style="width:1em;height:1em;vertical-align:middle;" />`;
  });
}
