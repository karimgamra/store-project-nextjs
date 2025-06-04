// app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { name: "karim", id: "162", role: "student" },
    { name: "ali", id: "87678", role: "student" },
    { name: "ahmed", id: "98796", role: "teacher" },
  ];
  return NextResponse.json(users);
}
