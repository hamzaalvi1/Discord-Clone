import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";
import { registerSchema } from "@/components/Auth/ValidationSchema";

export const POST = async (request: NextRequest) => {
  try {
    const response = await request.json();
    const registerData = registerSchema.safeParse(response);
    if (!registerData.success) {
      console.log(registerData.error.format());
    }
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
