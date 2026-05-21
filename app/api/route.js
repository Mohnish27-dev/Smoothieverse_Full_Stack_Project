export async function GET() {
  return Response.json({
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "missing",
    GOOGLE_ID: process.env.GOOGLE_ID || "missing",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "missing",
  });
}