import { getAdvisoryCategory } from "@/data";
import { Icon } from "@/lib/icons";

/** Coloured icon for an advisory category (config lives in advisory.json → categories). */
export function CategoryIcon({
  category,
  size = "w-3.5 h-3.5",
}: {
  category: string;
  size?: string;
}) {
  const config = getAdvisoryCategory(category);
  return (
    <Icon
      name={config?.icon ?? "Users"}
      className={`${size} ${config?.iconColor ?? "text-amber-500"}`}
    />
  );
}
