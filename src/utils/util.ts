/** OTHER */
import PAGE_CONTENT from "@src/utils/constants";

const {
  ERROR: { MESSAGE },
} = PAGE_CONTENT;

const processStatusCode = (code: number) =>
  code in MESSAGE.RESPONSE
    ? MESSAGE.RESPONSE[code as keyof typeof MESSAGE.RESPONSE]
    : MESSAGE.RESPONSE.DEFAULT;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processError = (error: any) => {
  if (error.response) {
    return processStatusCode(error.response.status);
  } else if (error.request) {
    return MESSAGE.NO_RESPONSE;
  } else {
    return MESSAGE.GENERIC;
  }
};

export const getItemsForPage = <T>(items: T[], from: number, to: number) =>
  items.slice(from, to);

export const getShortenedText = (text: string, maxChars: number) =>
  text.length > maxChars ? text.substring(0, maxChars) + "..." : text;
