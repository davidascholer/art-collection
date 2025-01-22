import AuthPage from "@/ui/components/auth/auth-page/AuthPage";
import { Logout } from "@/ui/components/auth/logout/Logout";

export default function SignOut() {
  return (
    <AuthPage>
        <Logout />
    </AuthPage>
  );
}