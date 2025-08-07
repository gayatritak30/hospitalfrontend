import { AlertTriangle } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 text-white py-4 text-center flex items-center justify-center gap-3">
      <AlertTriangle className="h-6 w-6" />
      <span className="font-semibold text-lg">
        Emergency? Call our 24x7 Helpline: <a href="tel:108" className="underline">108</a>
      </span>
    </div>
  );
};

export default EmergencyBanner;
