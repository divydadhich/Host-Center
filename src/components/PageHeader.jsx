import { useNavigate } from "react-router-dom";

export default function PageHeader({ title }) {
  const nav = useNavigate();

  return (
    <header className="h-14 bg-indigo-950 text-white flex items-center justify-center relative">
      <button
        onClick={() => nav(-1)}
        className="absolute left-4 text-xl"
      >
        ‹
      </button>
      <span className="text-lg font-semibold">{title}</span>
    </header>
  );
}
