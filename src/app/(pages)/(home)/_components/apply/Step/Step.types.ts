import { z } from "zod";
import { formDataSchema } from "../schema";
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";

export type FormData = z.infer<typeof formDataSchema>;

export interface StepProps {
  register: UseFormRegister<FormData>; 
  errors: any;
}

export interface StepOneProps {
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
}

export interface StepTwoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
}