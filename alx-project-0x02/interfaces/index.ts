export interface UserProps {
    id: number;
    name: string;
    email: string
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}