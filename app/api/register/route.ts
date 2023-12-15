import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";
import { normalizeZodError } from "@/utils";
import { NextResponse, NextRequest } from "next/server";
import { registerSchema } from "@/components/Auth/ValidationSchema";

const checkEmailExist = async (email: string) => {
  const result = await prismadb.user.findUnique({ where: { email } });
  return result;
};

export const POST = async (request: NextRequest) => {
  try {
    const response = await request.json();
    const registerData = registerSchema.safeParse(response);
    // valid registration data
    if (!registerData.success) {
      const err = normalizeZodError(registerData.error);
      return NextResponse.json({ error: err[0].message }, { status: 400 });
    }
    // check if the register is already exist
    const isEmailExist = await checkEmailExist(registerData.data.email);
    if (isEmailExist) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 403 }
      );
    }
    const { username, email, password } = registerData.data;
    const hashedPassword = await bcrypt.hash(password, 11);

    const user = await prismadb.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      { message: "created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
