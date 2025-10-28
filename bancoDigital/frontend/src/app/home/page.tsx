import { useLocation } from "react-router-dom";

export function Home() {
  const location = useLocation();
  const bank = location.state?.bank || "Banco";

  const bankColors: Record<string, string> = {
    "Caixa Econômica Federal": "text-[#0D4F97]",
    "Banco do Brasil": "text-[#FFB400]",
  };

  const colorClass = bankColors[bank] || "text-gray-800";

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className={`text-3xl font-bold ${colorClass}`}>Bem-vindo ao {bank}!</h1>
      <p className="text-gray-600">Você está logado com sucesso.</p>
    </div>
  )
}
