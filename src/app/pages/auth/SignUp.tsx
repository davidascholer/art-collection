import AuthPage from "@/ui/components/auth/auth-page/AuthPage";
import { SignupForm } from "@/ui/components/auth/signup-form/SignupForm";

export default function SignUp() {
  return (
    <AuthPage>
        <SignupForm />
    </AuthPage>
  );
}