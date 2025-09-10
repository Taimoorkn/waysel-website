import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(req) {
  const token = crypto.randomBytes(16).toString("hex");
  const response = NextResponse.json({ csrfToken: token });
  response.cookies.set("csrfToken", token, { httpOnly: true, path: "/" });
  return response;
}