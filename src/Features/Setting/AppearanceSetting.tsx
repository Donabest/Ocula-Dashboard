import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/reui/Select";
import { useDark } from "../../Context/DarkModeContext";
import AppearancePreviewCard from "../../ui/AppearancePreviewCard";
import SettingHeader from "../../ui/SettingHeader";

const language: { label: string; value: string }[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "French",
    value: "Fr",
  },
  {
    label: "Español",
    value: "Es",
  },
];

function AppearanceSetting() {
  const { isDarkMode, setDarkMode } = useDark();

  return (
    <div>
      <SettingHeader
        title="Appearance"
        description="Change how your public dashboard looks and feels."
      />

      <div className="flex flex-col gap-4 py-5 border-t border-t-gray-200 dark:border-t-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <SettingHeader
          title="Brand Color"
          description=" Highlight color for main objects, like buttons."
        />
        <div className=" flex items-center gap-3 border-2 border-blue-700 p-1 rounded-full">
          <span className=" bg-blue-700 p-3 rounded-full cursor-pointer "></span>
        </div>
      </div>

      <div className="border-t border-t-gray-300 py-5 dark:border-t-slate-700">
        <SettingHeader
          title="Theme"
          description="Choose how your dashboard interface should appear."
        />

        <div className="grid grid-cols-1 gap-4 ml-4 md:grid-cols-2">
          <AppearancePreviewCard
            title="Light"
            description="Bright dashboard preview"
            variant="light"
            selected={!isDarkMode}
            onSelect={() => setDarkMode(false)}
          />
          <AppearancePreviewCard
            title="Dark"
            description="Dim dashboard preview"
            variant="dark"
            selected={isDarkMode}
            onSelect={() => setDarkMode(true)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-t-gray-300 py-5 dark:border-t-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <SettingHeader
          title="Language"
          description="Default language for public dashboard."
        />
        <Select>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {language.map((lang) => (
                <SelectItem value={lang.value} key={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default AppearanceSetting;
