import AccoutSetting from "./AccoutSetting";
import Aipreferences from "./Aipreferences";
import AppearanceSetting from "./AppearanceSetting";
import DangerZone from "./DangerZone";
import NotificationSetting from "./NotificationSetting";
import SecuritySetting from "./SecuritySetting";

function SettingContent({ currentTab }: { currentTab: string }) {
  return (
    <div className="flex-1 pt-4">
      {currentTab === "Account" && <AccoutSetting />}
      {currentTab === "Appearance" && <AppearanceSetting />}
      {currentTab === "Notification" && <NotificationSetting />}
      {currentTab === "Ai preferences" && <Aipreferences />}
      {currentTab === "Security" && <SecuritySetting />}
      {currentTab === "Danger Zone" && <DangerZone />}
    </div>
  );
}

export default SettingContent;
