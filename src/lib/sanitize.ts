/**
 * Sanitize a meeting ID — only allow alphanumeric, hyphens, and spaces.
 * Strips any HTML, script tags, or special characters that could be used for XSS.
 */
export function sanitizeMeetingId(input: string): string {
  // Strip anything that's not alphanumeric, hyphen, space, or period
  return input.replace(/[^a-zA-Z0-9\-\s.]/g, "").trim().slice(0, 40);
}

/**
 * Sanitize generic text input — strip HTML tags and limit length.
 */
export function sanitizeText(input: string, maxLength = 200): string {
  return input
    .replace(/<[^>]*>/g, "")    // strip HTML tags
    .replace(/[<>"'&]/g, "")    // strip dangerous chars
    .trim()
    .slice(0, maxLength);
}
