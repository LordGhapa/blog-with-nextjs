"use client";

import { useReadPostsStore } from "@/app/store";
import { useEffect } from "react";

interface IsReadUpdateProps {
  postId: string;
}

export default function IsReadUpdate({ postId }: IsReadUpdateProps) {
  const { addReadPost, isPostRead } = useReadPostsStore();
  useEffect(() => {
    if (isPostRead(postId)) return;
    const timer = setTimeout(() => {
      addReadPost(postId);
    }, 120000); // 2 minutes in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, [postId, addReadPost, isPostRead]);

  return null;
}
