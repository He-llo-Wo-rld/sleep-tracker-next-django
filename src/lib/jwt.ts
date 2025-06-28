import { jwtVerify } from "jose";
import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not set");
}

export function signJwt(payload: object, expiresIn = "7d") {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn } as SignOptions);
  console.log("signJwt: payload:", payload);
  console.log("signJwt: token:", token);
  return token;
}

export function verifyJwt<T = Record<string, unknown>>(
  token: string
): T | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as T;
    return decoded;
  } catch {
    return null;
  }
}

// Для Edge Runtime (middleware)
export async function verifyJwtEdge<T = Record<string, unknown>>(
  token: string
): Promise<T | null> {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );

    return payload as T;
  } catch {
    return null;
  }
}
