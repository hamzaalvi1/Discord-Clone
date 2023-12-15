import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

const normalizeZodError = (error: ZodError) => {
  const normalizeErr = fromZodError(error);
  const errorArray = normalizeErr.details.map((detail) => {
    return { message: detail?.message };
  });
  return errorArray;
};

export default normalizeZodError;
