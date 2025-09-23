
import { RingLoader } from "react-spinners";

export default function Spinners() {
  return (
    <div className="flex justify-center items-center">
      <RingLoader
        color="#36d7b7"
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
