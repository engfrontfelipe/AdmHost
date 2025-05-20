import { useState } from "react";

import { Toaster, toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleDollarSign, CirclePlus, SquarePen } from "lucide-react";
import Cards from "./Cards";
import Header from "./header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function InitialPage() {
  const tarefas = [
    {
      nome: "João Silva",
      dominio: "joao.com.br",
      pagamento: "Seed",
      plano: "Ativo",
      vencimento: "10/06/2025",
    },
  ];

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />

      <div className="p-6 w-[1200px] flex flex-col m-auto">
        <Cards />
        <div className="flex justify-between bg-accent rounded p-4">
          <h1 className="text-2xl font-semibold flex">
            <CircleDollarSign className="mt-1.5 mr-2" />
            Tabela de Clientes
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="cursor-pointer">
                <CirclePlus className="" />
                Adicionar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>Adicionar Cliente</DialogTitle>
                <DialogDescription>
                  Digite os dados para adicionar um novo cliente.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Empresa:
                  </Label>
                  <Input
                    id="name"
                    value={nome}
                    className="col-span-3"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Domínio:
                  </Label>
                  <Input
                    id="name"
                    value={nome}
                    className="col-span-3"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome do Responsável:
                  </Label>
                  <Input
                    id="name"
                    value={nome}
                    className="col-span-3"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Data de adesão:
                  </Label>
                  <input
                    type="date"
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
                  />
                </div>

                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Data de Vencimento do pagamento:
                  </Label>
                  <input
                    type="date"
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700"
                  />
                </div>

                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Plano Contratado:
                  </Label>
                  <Select 
                    onValueChange={(value) =>
                      console.log("Plano selecionado:", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um plano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mensal">Seed</SelectItem>
                      <SelectItem value="trimestral">Growth</SelectItem>
                      <SelectItem value="anual">Source</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Vendedor Responsável:
                  </Label>
                  <Input
                    id="username"
                    value={email}
                    className="col-span-3"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="cursor-pointer"
                  onClick={() => {
                    toast.success("Cliente cadastrado com sucesso!");
                  }}
                >
                  Salvar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Empresa</TableHead>
              <TableHead>Domínio</TableHead>
              <TableHead>Plano</TableHead>
              <TableHead>Status do plano</TableHead>
              <TableHead>Data de adesão </TableHead>

              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tarefas.map((tarefa, index) => (
              <TableRow key={index}>
                <TableCell>{tarefa.nome}</TableCell>
                <TableCell>{tarefa.dominio}</TableCell>
                <TableCell>{tarefa.pagamento}</TableCell>
                <TableCell>{tarefa.plano}</TableCell>
                <TableCell>{tarefa.vencimento}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <SquarePen size={16} className="ml-2 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Editar Cliente</DialogTitle>
                        <DialogDescription>
                          Digite os dados novos dados do cliente.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Nome:
                          </Label>
                          <Input
                            id="name"
                            value={nome}
                            className="col-span-3"
                            onChange={(e) => {
                              setNome(e.target.value);
                            }}
                          />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Email:
                          </Label>
                          <Input
                            id="username"
                            value={email}
                            className="col-span-3"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="cursor-pointer"
                          onClick={() => {
                            toast.success("Cliente cadastrado com sucesso!");
                          }}
                        >
                          Salvar
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Toaster richColors position="bottom-center" />
      </div>
    </>
  );
}

export default InitialPage;
