"use client";
import toast from "react-hot-toast";

export const successLogger = (message: string) => {
  return toast.success(message);
};

export const errorLogger = (message: string) => {
  return toast.error(message);
};
