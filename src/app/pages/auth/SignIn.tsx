import AuthPage from "@/ui/components/auth/auth-page/AuthPage";
import { LoginForm } from "@/ui/components/auth/login-form/LoginForm";

export default function SignIn() {
  return (
    <AuthPage>
        <LoginForm />
    </AuthPage>
  );
}