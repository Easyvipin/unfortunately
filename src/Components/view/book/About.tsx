import { Avatar, AvatarFallback, AvatarImage } from "@components/UI/avatar";
import { Badge } from "@components/UI/badge";
import * as React from "react";
import { FaRegStar } from "react-icons/fa";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <div>
          <Avatar>
            <AvatarImage
              className=""
              width={"40rem"}
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h3 className="text-3xl">John Doe</h3>
          <h5 className="text-xs text-muted-foreground px-1">
            Software Developer
          </h5>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="text-xs text-secondary-foreground ">3+ Yrs</div>
        <div className="flex gap-1  flex-wrap">
          <Badge className="text-xs bg-muted-foreground text-muted">
            Flipkart
          </Badge>
          <Badge className="text-xs bg-muted-foreground text-muted">
            Flipkart
          </Badge>
          <Badge className="text-xs bg-muted-foreground text-muted">
            Flipkart
          </Badge>
        </div>
      </div>
      <div className="flex gap-4 mt-2 items-center">
        <div className="text-green-500">100+ Booked</div>
        <div className="flex items-center gap-1 text-yellow-400">
          <FaRegStar /> 4.5
        </div>
      </div>
    </div>
  );
};

export default About;
