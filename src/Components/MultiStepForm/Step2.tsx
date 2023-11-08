import { Badge } from "@components/UI/badge";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/UI/form";
import { Input } from "@components/UI/input";
import { Label } from "@components/UI/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@components/UI/select";
import { techProfessions } from "@utils/constants";

import React, { useEffect, useState } from "react";

interface IStep2Props {
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FunctionComponent<IStep2Props> = ({ form }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("");
  const [skills, setSkills] = useState<string[]>(form.getValues().skills);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setSkills([...skills, inputValue.trim()]);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (skills.length >= 0) {
      form.setValue("skills", skills);
    }
  }, [skills]);

  const handleRemoveSkill = (skill: string) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
  };
  const handleSelectValueChange = (value: string) => {
    setSelectValue(value);
  };

  return (
    <div className="p-2">
      <div className="mt-2">
        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="text">Profession ?</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[100%] p-8 text-3xl mt-2">
                    <SelectValue placeholder="Want to work as..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {techProfessions.map((eachProfession) => (
                    <SelectItem
                      key={eachProfession.value}
                      value={eachProfession.value}
                    >
                      {eachProfession.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="text">Skills you best at!</Label>
              <Input
                type="text"
                placeholder="For ex: Reactjs"
                className="text-3xl p-8 mt-2"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3 mt-2">
          {skills.map((eachSkill) => (
            <div key={eachSkill} className=" relative">
              <Badge className="flex gap-2 justify-between p-0 py-1 pl-2">
                {eachSkill}{" "}
                <button
                  className="text-[10px] w-[20px] h-[20px] rounded-full bg-gray-500 text-center right-0 -top-2"
                  onClick={() => handleRemoveSkill(eachSkill)}
                >
                  X
                </button>
              </Badge>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="flex justify-between"></div>
    </div>
  );
};

export default Step2;
