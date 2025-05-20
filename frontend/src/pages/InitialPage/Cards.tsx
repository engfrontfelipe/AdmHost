import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { CircleAlert, CircleCheck, Users } from "lucide-react";

function Cards() {
  return (
    <div className="grid grid-cols-3 gap-x-5 mb-5">
      <Card className="w-full border-[2px] border-green-400">
        <CardDescription className="text-center text-gray-700 text-lg">
          Total de Clientes
        </CardDescription>
        <CardTitle className="text-6xl flex text-center m-auto text-green-400">
          <Users size={43} className="mt-3" /> 1
        </CardTitle>
        <CardFooter className="text-center text-sm text-gray-500">
          O número total de clientes cadastrados no sistema.
        </CardFooter>
      </Card>

      <Card className="w-full border-[2px] border-purple-600">
        <CardDescription className="text-center text-gray-700 text-lg">
          Planos ativos
        </CardDescription>
        <CardTitle className="text-6xl flex text-center text-purple-600 m-auto">
          <CircleCheck size={43} className="mt-3 " /> 1
        </CardTitle>
        <CardFooter className="text-center text-sm text-gray-500">
          Clientes com planos que ainda não venceram.
        </CardFooter>
      </Card>

      <Card className="w-full border-[2px] border-red-500">
        <CardDescription className="text-center text-gray-700 text-lg">
          Planos Vencidos
        </CardDescription>
        <CardTitle className="text-6xl flex text-center m-auto text-red-500">
          <CircleAlert size={43} className="mt-3" /> 1
        </CardTitle>
        <CardFooter className="text-center text-sm text-gray-500">
          Clientes com planos que já venceram e precisam ser renovados.
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cards;
