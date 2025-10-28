import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const bank = location.state?.bank || "Banco";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home", { state: { bank } });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Login - {bank}</CardTitle>
          <CardDescription>Entre com seus dados para acessar</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" type="cpf" placeholder="000.000.000-00" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-2">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
