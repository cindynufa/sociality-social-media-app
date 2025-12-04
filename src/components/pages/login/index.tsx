import Logo from '../../ui/Logo';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <main className="flex bg-gradient justify-center">
      <div className="flex flex-col z-50 lg:w-111.5 m-auto px-6 py-10 gap-6 border border-neutral-900 rounded-2xl bg-transparent items-center">
        <Logo />
        <p className="text-display-xs font-bold text-neutral-25">
          Welcome Back!
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
