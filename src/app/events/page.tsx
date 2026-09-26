import type { Metadata } from "next";
import Events from "./components/Events"

export const metadata: Metadata = {
  title: "Events & Community Drives",
  description:
    "Milestone ceremonies, laptop distributions, health camps and winter blanket drives by Janseva Pratishthan Foundation.",
};

const page =()=> {
  return <Events />;
}
export default page;
