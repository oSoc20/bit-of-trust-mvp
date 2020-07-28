export type Token = Uint8Array;
export const TokenSize = 16;

export function createToken(): Token {
  let token = new Uint8Array(TokenSize);
  crypto.getRandomValues(token);
  return token;
}

//TODO: improve readability of these functions

export function tokenToString(token: Token): string {
  return [...token]
    .map((b: Number) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function stringToToken(tokenString: string): Token {
  return new Uint8Array(tokenString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}
