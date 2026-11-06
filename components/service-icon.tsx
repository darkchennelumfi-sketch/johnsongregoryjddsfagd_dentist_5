import { Activity, Leaf, Smile, Users, type LucideIcon } from "lucide-react";
import type { Service } from "@/lib/site";

const icons: Record<Service["icon"], LucideIcon> = {
  users: Users,
  leaf: Leaf,
  smile: Smile,
  pulse: Activity,
};

export function ServiceIcon({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const Icon = icons[service.icon];
  return <Icon className={className} strokeWidth={1.25} aria-hidden="true" />;
}
