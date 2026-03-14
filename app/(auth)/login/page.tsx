import { AuthLayout } from "@/components/auth/auth-layout";
import { Login } from "@/components/auth/Login";

export default function page() {
  return (
    <AuthLayout>
      <div className="w-full mx-auto transition-all duration-300 max-w-107.5 shadow-2xl">
        <Login />
      </div>
    </AuthLayout>
  );
}
