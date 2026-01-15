import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-500/20 text-primary-400 border-primary-500/30",
    secondary: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    accent: "bg-accent-neon/20 text-accent-neon border-accent-neon/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
