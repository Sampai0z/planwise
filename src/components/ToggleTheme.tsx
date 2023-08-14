"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
// import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = React.useState(theme === "dark");

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme("Light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        {isChecked ? <SunIcon /> : <MoonIcon />}
        <Switch id="toggle-theme" onClick={handleSwitchChange} />
        <label htmlFor="toggle-theme">Toggle Theme</label>
      </div>
    </>
  );
}
