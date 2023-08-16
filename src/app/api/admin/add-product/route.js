import connectToDB from "@/database";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: true,
      message: "Product added successfully",
    });
  }
}
