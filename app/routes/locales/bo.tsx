import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return {
    greeting: "བཀྲ་ཤིས་བདེ་ལེགས།",
    fontSize: " ཡིག་གཟུགས་ཆེ་ཆུངྲ།",
    Question: "དྲི་བ།",
  };
};
