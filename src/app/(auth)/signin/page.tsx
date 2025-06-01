import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-muted overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-110 filter blur-md"
        style={{
          backgroundImage: "url('/assets/background.png')",
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-3xl p-6 md:p-10">
        <LoginForm />
      </div>
    </div>
  );
}
