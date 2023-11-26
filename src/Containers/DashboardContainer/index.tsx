import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/UI/tabs";
import {
  FiCalendar,
  FiFeather,
  FiRadio,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";
import Performance from "@components/view/dashboard/performance";
import Feedback from "@components/view/dashboard/feedback";
import Resources from "@components/view/dashboard/resources";
import Calls from "@components/view/dashboard/calls";
import { Contact } from "lucide-react";
import Contacts from "@components/view/dashboard/contacts";

interface IDashboardContainerProps {}

const DashboardContainer: React.FunctionComponent<IDashboardContainerProps> = (
  props
) => {
  return (
    <div className="mt-10">
      <Tabs
        defaultValue="performance"
        className="w-full flex flex-col justify-center items-center"
      >
        <TabsList className=" bg-background w-[75%]">
          <TabsTrigger
            value="performance"
            className="rounded-none data-[state=active]:border-b data-[state=active]:border-primary text-md font-semibold tracking-tighter flex justify-center gap-2"
          >
            <div className="hidden md:block">Performance</div> <FiTrendingUp />
          </TabsTrigger>
          <TabsTrigger
            value="feedback"
            className="rounded-none data-[state=active]:border-b data-[state=active]:border-primary text-md font-semibold tracking-tighter flex justify-center gap-2"
          >
            <div className="hidden md:block">Feedback</div> <FiRadio />
          </TabsTrigger>
          <TabsTrigger
            value="resources"
            className="rounded-none data-[state=active]:border-b data-[state=active]:border-primary text-md font-semibold tracking-tighter flex justify-center gap-2"
          >
            <div className="hidden md:block">Resources</div> <FiFeather />
          </TabsTrigger>
          <TabsTrigger
            value="calls"
            className="rounded-none data-[state=active]:border-b data-[state=active]:border-primary text-md font-semibold tracking-tighter flex justify-center gap-2"
          >
            <div className="hidden md:block">Calls</div> <FiCalendar />
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="rounded-none data-[state=active]:border-b data-[state=active]:border-primary text-md font-semibold tracking-tighter flex justify-center gap-2"
          >
            <div className="hidden md:block">Contacts</div> <FiSmartphone />
          </TabsTrigger>
        </TabsList>
        <div className="mt-10 w-full md:w-[90%] border rounded px-[5%] py-10">
          <TabsContent value="performance">
            <Performance />
          </TabsContent>
          <TabsContent value="feedback">
            <Feedback />
          </TabsContent>
          <TabsContent value="resources">
            <Resources />
          </TabsContent>
          <TabsContent value="calls">
            <Calls />
          </TabsContent>
          <TabsContent value="contacts">
            <Contacts />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DashboardContainer;
