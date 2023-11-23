import { orbitron } from "@/components/fonts";
const Heading = ({ children }) => {
  return (
    <>
      <div
        className={`text-2xl pb-4 font-bold font-orbitron ${orbitron.className}`}
      >
        {children}{" "}
      </div>
    </>
  );
};
export default Heading;
