"use client";

import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
  label,
  disabled,
  outlined,
  small,
  icon: Icon,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "disabled:opacity-50 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-auto border-slate-300 border-2 flex items-center justify-center gap-2 py-3 px-5 my-2 bg-slate-700 text-white dark:border-slate-700",
        outlined &&
          "bg-transparent text-slate-700 dark:text-slate-300 dark:bg-transparent",
        small && "text-sm py-1 px-2 border=[1px]",
        className && className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={20} />}
      {label}
    </button>
  );
};

export default Button;
