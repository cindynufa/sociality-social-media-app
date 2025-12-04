import { Link } from 'react-router';

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex flex-row gap-2.75">
        <img src="/icons/logo.png" alt="Logo" className="size-7.5" />
        <h1 className="text-display-xs font-bold text-neutral-25">Sociality</h1>
      </div>
    </Link>
  );
}
