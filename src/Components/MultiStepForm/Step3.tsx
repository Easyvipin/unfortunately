import { Checkbox } from "@components/UI/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/UI/form";

interface IStep3Props {}

const industryItems = [
  {
    id: "product_based",
    label: "Product Based",
  },
  {
    id: "service_based",
    label: "Service Based",
  },
];
const availItems = [
  {
    id: "weekend",
    label: "Weekend",
  },
  {
    id: "week_days",
    label: "Week Days",
  },
];

const Step3: React.FunctionComponent<IStep3Props> = ({ form }) => {
  return (
    <div className="p-2">
      <div className="mt-2">
        <FormField
          control={form.control}
          name="industry"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Industry</FormLabel>
                <FormDescription>
                  Select the type of industry you want to prepare for
                </FormDescription>
              </div>
              {industryItems.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="industry"
                  render={({ field }) => {
                    console.log(field);
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field?.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={form.control}
          name="availability"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Availability</FormLabel>
                <FormDescription>
                  Select the time in week , to schedule mocks.
                </FormDescription>
              </div>
              {availItems.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="availability"
                  render={({ field }) => {
                    console.log(field);
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field?.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <br />
    </div>
  );
};

export default Step3;
