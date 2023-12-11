import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

export const POST = async (request: NextRequest) => {
  return NextResponse.json({ message: "success" }, { status: 200 });
};
