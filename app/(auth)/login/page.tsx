import { AuthLayout } from "@/components/auth/auth-layout";
import { Login } from "@/components/auth/Login";

export default function page() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
