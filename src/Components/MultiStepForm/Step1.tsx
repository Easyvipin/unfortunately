import {
  FormDescription,
  FormField,  
  FormItem,
  FormMessage,
} from "@components/UI/form";
import { Input } from "@components/UI/input";
import { Label } from "@components/UI/label";
import { formSchema } from "@utils/validations";
import * as React from "react";
import { UseFormProps } from "react-hook-form";

import * as z from "zod";

// Define a generic type for the form data
type FormData = z.infer<typeof formSchema>;

interface IStep1Props {
  form: UseFormProps<FormData>;
  disableNext: () => void;
  enableNext: () => void;
}

const Step1: React.FunctionComponent<IStep1Props> = ({ form }) => {
  return (
    <div className="p-2">
      <div className="mt-2">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="text">Full Name</Label>
              <Input
                type="text"
                placeholder="For ex: John Doe"
                className="text-3xl p-8 mt-2"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="text">Bio</Label>
              <Input
                type="text"
                placeholder="For ex: Writer of asgard!"
                className="text-3xl p-8 mt-2"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <br />
      <div className="flex justify-between"></div>
    </div>
  );
};

export default Step1;
