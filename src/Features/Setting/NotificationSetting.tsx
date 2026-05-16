import { Switch } from "#components/ui/switch";
import SettingHeader from "../../ui/SettingHeader";

function NotificationSetting() {
  return (
    <div>
      <SettingHeader
        title="Notification Preferance"
        description="Manage how you can receive notification and stay updated with important
        activity."
      />
      <div className="notify-pref">
        <SettingHeader
          title="Email Notifications"
          description="Recieved upcomming tasks,due tasks, and important account notification via email."
        />
        <Switch />
      </div>

      <div className="notify-pref">
        <SettingHeader
          title="Push Notification"
          description="Get real time-alerts directly on your device."
        />
        <Switch />
      </div>
      <div className="notify-pref">
        <SettingHeader
          title="SMS Notification"
          description="Recive critical alerts and security related notification via SMS."
        />
        <Switch />
      </div>

      <div className="notify-pref">
        <SettingHeader
          title="In-App Notification"
          description="See Notification Directly in the App."
        />
        <Switch defaultChecked />
      </div>
    </div>
  );
}

export default NotificationSetting;
