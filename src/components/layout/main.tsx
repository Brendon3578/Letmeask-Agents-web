import { BotMessageSquare, Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { useTheme } from "../../components/theme-provider";
import { Button } from "../../components/ui/button";

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  const { setTheme, theme } = useTheme();

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-end gap-6 border-b p-2 text-primary">
          <h2 className="scroll-m-20 font-semibold text-3xl text-emerald-600 tracking-tight first:mt-0 dark:text-emerald-500">
            Letmeask
            <BotMessageSquare className="-translate-y-0.5 ml-2 inline-block" />
          </h2>
          <p className="hidden md:block">
            Converse com seus criadores de conteúdo rapidamente
          </p>
          <Button
            className="ml-auto"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="icon"
            variant={"outline"}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
