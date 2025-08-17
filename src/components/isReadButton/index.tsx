"use client";
import { useReadPostsStore } from "@/app/store";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

interface IsReadButtonProps {
  postId: string;
}

export default function IsReadButton({ postId }: IsReadButtonProps) {
  const { isPostRead, addReadPost, removeReadPost } = useReadPostsStore();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isMounted === false) return;

  const postIsRead = isPostRead(postId);

  const handleReadToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (postIsRead) {
      removeReadPost(postId);
    } else {
      addReadPost(postId);
    }
  };

  return (
    <>
      <button
        onClick={handleReadToggle}
        title={postIsRead ? "Marcar como não lido" : "Marcar como lido"}
        className={cn(
          "z-20 cursor-pointer rounded-full p-2 transition-all duration-200",
          !postIsRead
            ? "bg-gray-100 text-orange-600 hover:bg-orange-200 dark:bg-slate-700 dark:hover:bg-orange-900/30"
            : "bg-gray-100 text-gray-500 hover:bg-orange-100 hover:text-orange-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-orange-900/30",
        )}
      >
        {postIsRead ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </>
  );
}
