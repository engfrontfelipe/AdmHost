import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

function Header() {
  return (
    <div className="bg-accent p-5 flex justify-between">
      <h1 className="text-2xl font-medium ml-20">Gestão GroveHost</h1>

      <Button className="w-20 flex items-center gap-2 mr-20 cursor-pointer">
        <Power size={18} />
        Sair
      </Button>
    </div>
  );
}

export default Header;
