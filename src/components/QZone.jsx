import swimming from "../assets/swimming.png";
import students from "../assets/class.png";
import playground from "../assets/swimming.png";

export const QZone = () => {
  return (
    <div className="mt-5 bg-base-200 py-2 px-2 rounded-sm">
      <h2 className="font-semibold text-xl text-gray-700">Q-Zone</h2>
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <img src={swimming} alt="" />
        </div>
        <div>
          <img src={students} alt="" />
        </div>
        <div>
          <img src={playground} alt="" />
        </div>
      </div>
    </div>
  );
};
