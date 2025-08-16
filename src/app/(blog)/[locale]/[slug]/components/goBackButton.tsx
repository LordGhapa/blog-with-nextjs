"use client";

import { Link, useRouter } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  const router = useRouter();

  // const onBack = () => {
  //   if (!document.startViewTransition) {
  //     router.back();
  //     return;
  //   }

  //   document.startViewTransition(() => {
  //     router.back();
  //   });
  // };

  return (
    <Link
      // onClick={onBack}
      href={"/"}
      className="mb-6 flex items-center space-x-2 text-orange-500 transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="font-medium">Voltar para o blog</span>
    </Link>
  );
}
