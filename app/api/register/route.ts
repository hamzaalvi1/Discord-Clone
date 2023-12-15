import bcrypt from "bcrypt";
import { normalizeZodError } from "@/utils";
import { NextResponse, NextRequest } from "next/server";
import { registerSchema } from "@/components/Auth/ValidationSchema";

export const POST = async (request: NextRequest) => {
  try {
    const response = await request.json();
    const registerData = registerSchema.safeParse(response);
    if (!registerData.success) {
      const err = normalizeZodError(registerData.error);
      return NextResponse.json({ error: err[0].message }, { status: 400 });
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
