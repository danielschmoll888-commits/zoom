/**
 * Sanitize a meeting ID — numbers only.
 * Strips everything except digits. Max 11 digits.
 */
export function sanitizeMeetingId(input: string): string {
  return input.replace(/[^0-9]/g, "").slice(0, 11);
}

/**
 * Validate meeting ID format — must be 3-11 digits
 */
export function isValidMeetingId(input: string): boolean {
  const clean = sanitizeMeetingId(input);
  return clean.length >= 3 && clean.length <= 11;
}

/**
 * Format meeting ID with dashes for display (e.g., 123-456-7890)
 */
export function formatMeetingId(input: string): string {
  const digits = sanitizeMeetingId(input);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * Sanitize generic text input — strip HTML tags and limit length.
 */
export function sanitizeText(input: string, maxLength = 200): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[<>"'&]/g, "")
    .trim()
    .slice(0, maxLength);
}
