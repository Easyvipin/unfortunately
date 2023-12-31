import { Button } from "@components/UI/button";
import { Calendar } from "@components/UI/calendar";
import { Checkbox } from "@components/UI/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/UI/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/UI/popover";
import { RadioGroup, RadioGroupItem } from "@components/UI/radio-group";
import { cn } from "@utils/shd";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface IBookFormProps {}

/* const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
}) */

const items = [
  {
    id: "easy",
    label: "Easy (No Cost)",
  },
  {
    id: "medium",
    label: "Medium ($ 20)",
  },
  {
    id: "hard",
    label: "Hard ($ 50)",
  },
] as const;

const BookForm: React.FunctionComponent<IBookFormProps> = (props) => {
  const form = useForm({});

  return (
    <div className="">
      <div className="border-b-2 py-2 tracking-tight">
        <h2 className="text-2xl tracking-tight">Interview Details</h2>
        <h5 className="text-sm tracking-tight text-muted-foreground mt-1">
          Select and fill up the requirements for mock interview
        </h5>
      </div>
      <Form {...form}>
        <form onSubmit={() => {}} className="mt-4">
          <FormField
            name="interviewDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block">
                  Select Mock Interview Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"time"}
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel>Choose a perfect Time</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                      <FormLabel className="font-normal">11:00 AM</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="mentions" />
                      </FormControl>
                      <FormLabel className="font-normal">4:00 AM</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal">6:30 PM</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem className="mt-3">
                <div className="mb-4">
                  <FormLabel className="text-base">Levels</FormLabel>
                  <FormDescription>
                    Select Interview Difficulty Level
                  </FormDescription>
                </div>
                <div className="flex gap-2 items-center">
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedbackPrefences"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel className="text-md tracking-tighter font-bold">
                  Feedback Prefences
                </FormLabel>
                <FormDescription className="text-sm tracking-tighter !mt-0">
                  Standard assessments for skill, interview readiness, and
                  general performance are included in every mock interview.
                  <br />
                </FormDescription>
                <FormField
                  control={form.control}
                  name="skill-assesment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex">
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Resume Enhancement Session ($80)
                          </FormLabel>
                          <FormDescription>
                            Receive personalized advice on improving your resume
                            based on your mock interview performance.
                          </FormDescription>
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="skill-assesment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex">
                        <div className="space-y-1 leading-none">
                          <FormLabel>Feeback Session ($100)</FormLabel>
                          <FormDescription>
                            Schedule a post-interview session with the
                            interviewer to discuss feedback in more detail.
                            Receive personalized advice and strategies for
                            improvement.
                          </FormDescription>
                        </div>
                      </div>
                    </FormItem>
                  )}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow mt-8">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I agree to the Terms and Conditions</FormLabel>
                  <FormDescription>
                    You can manage your mobile notifications in the{" "}
                    <Link href="/examples/forms">mobile settings</Link> page.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default BookForm;
