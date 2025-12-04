import Logo from '../../ui/Logo';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <main className="flex bg-gradient justify-center">
      <div className="flex flex-col z-50 lg:w-111.5 m-auto px-6 py-10 gap-6 border border-neutral-900 rounded-2xl bg-transparent items-center">
        <Logo />
        <p className="text-display-xs font-bold text-neutral-25">
          Register
        </p>
        <RegisterForm />
      </div>
    </main>
  );
}
