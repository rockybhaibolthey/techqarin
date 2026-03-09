// Outside MobileSimulator
import { LucideIcon } from "lucide-react"; // type for icons

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  return (
    <div className="flex flex-col justify-center items-center p-6 h-full w-full">
      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
        <Icon className="text-blue-600" size={32} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
        {feature.title}
      </h3>
      <p className="text-gray-500 text-sm text-center px-4">{feature.desc}</p>
    </div>
  );
}