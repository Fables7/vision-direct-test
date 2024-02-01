import { CheckCircle, Clock } from "lucide-react";

const positiveData = [
  { icon: CheckCircle, text: "Up to 45% cheaper" },
  { icon: CheckCircle, text: "365-day guarantee" },
  { icon: Clock, text: "Next day delivery" },
];

const Positives = () => {
  return (
    <div className="bg-[#f9fffe] xl:px-0 px-8">
      <div className="max-container flex items-center justify-between">
        <div className="flex gap-20 py-2">
          {positiveData.map((data) => (
            <div key={data.text} className="flex items-center gap-1">
              <data.icon className="h-4 w-4" />
              <p className="text-sm font-semibold">{data.text}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg">Excellent</p>
          <img src="/trustpilot.png" className="h-4 " />
          <img src="/trust-pilot-2.png" className="h-6 " />
        </div>
      </div>
    </div>
  );
};

export default Positives;
