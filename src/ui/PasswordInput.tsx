import { Button } from "#components/shacnUi/button";
import { Input } from "#components/shacnUi/input";
import { Label } from "#components/shacnUi/label";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

type passwordInputProps = {
  label: string;
  text: string;
  value?: Partial<string>;
  onChange: Partial<(e: React.ChangeEvent<HTMLInputElement>) => void>;
} & React.InputHTMLAttributes<HTMLInputElement>;

function PasswordInput({
  label,
  text,
  onChange,
  value,
  ...props
}: passwordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-300 max-w-sm space-y-3">
      <Label htmlFor="password-toggle" className="text-[15px] font-normal">
        {label}
      </Label>
      <div className="relative">
        <Input
          className="bg-background font-montserrat"
          id="password-toggle"
          autoComplete="password"
          placeholder={text}
          value={value}
          onChange={(e) => onChange(e)}
          {...props}
          type={showPassword ? "text" : "password"}
        />
        <Button
          className="absolute top-0 right-0 h-full px-3 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          size="icon"
          type="button"
          variant="ghost"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default PasswordInput;
