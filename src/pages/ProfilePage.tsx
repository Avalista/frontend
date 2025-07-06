import {Profile} from '../features/profile/Profile';
import { DashboardLayout } from '../features/dashboard/DashboardLayout';

export function ProfilePage() {
  return (
    <DashboardLayout>
      <Profile />
    </DashboardLayout>
  );
}