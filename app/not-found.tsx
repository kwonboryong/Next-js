import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <h2>Not Found!!!</h2>
      <Navigation />
    </div>
  );
}
