import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BanknoteIcon } from "lucide-react"
import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();

  const handleAccess = (bank: string) => {
    navigate("/login", { state: { bank } });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">
          Bem-vindo ao seu banco digital!
        </h1>
        <p className="text-gray-600">
          Qual banco você deseja acessar?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Caixa */}
        <Card className="w-72 hover:shadow-lg transition-all duration-200">
          <CardHeader className="text-center">
            <CardTitle className="text-[#0D4F97]">Caixa Econômica Federal</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button 
              className="w-full bg-[#0D4F97]" 
              onClick={() => handleAccess("Caixa Econômica Federal")}
            >
              <BanknoteIcon className="mr-2 h-4 w-4" />
              Acessar
            </Button>
          </CardContent>
        </Card>

        {/* Banco do Brasil */}
        <Card className="w-72 hover:shadow-lg transition-all duration-200">
          <CardHeader className="text-center">
            <CardTitle className="text-[#FFB400]">Banco do Brasil</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button 
              className="w-full bg-[#FFB400] text-black hover:bg-[#e0a600]"
              onClick={() => handleAccess("Banco do Brasil")}
            >
              <BanknoteIcon className="mr-2 h-4 w-4" />
              Acessar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
