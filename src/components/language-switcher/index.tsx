"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation"; // Importe o hook para search params
import { useTransition, useCallback, useState } from "react";

import Flag from "react-world-flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const locales = [
    { code: "en", flag: "US", label: "English" },
    { code: "pt-BR", flag: "BR", label: "Portugues" },
    { code: "es", flag: "ES", label: "Español" },
  ];

  const onLanguageChange = useCallback(
    (nextLocale: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      const newPath = `${pathname}?${newSearchParams}`;

      startTransition(() => {
        router.replace(newPath, { locale: nextLocale });
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <>
      <div className="flex items-center space-x-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="group w-full justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 pr-8 text-gray-900 transition-all duration-200 hover:text-orange-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:text-orange-400"
            >
              <div className="flex items-center gap-1">
                {selectedLocale ? (
                  <>
                    <Flag
                      code={
                        locales.find((l) => l.code === selectedLocale)?.flag
                      }
                      style={{ width: "24px", height: "16px" }}
                    />
                    {locales.find((l) => l.code === selectedLocale)?.label}
                  </>
                ) : (
                  "Select Language"
                )}
              </div>
              <Globe className=": size-4 translate-y-0.5 text-gray-400 group-hover:text-orange-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[150px] p-0" side="bottom" align="start">
            <Command>
              <CommandList>
                <CommandGroup>
                  {locales.map((l) => (
                    <CommandItem
                      key={l.code}
                      value={l.code}
                      onSelect={(value) => {
                        setSelectedLocale(value);
                        setOpen(false);
                        onLanguageChange(l.code);
                      }}
                    >
                      <Flag
                        code={l.flag}
                        style={{ width: "24px", height: "16px" }}
                      />
                      {l.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
