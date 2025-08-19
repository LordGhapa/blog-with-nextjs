"use client";

import { useReadPostsStore } from "@/app/store";
import { useEffect } from "react";

interface IsReadUpdateProps {
  postId: string;
}

export default function IsReadUpdate({ postId }: IsReadUpdateProps) {
  const { addReadPost } = useReadPostsStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      addReadPost(postId);
    }, 120000); // 2 minutes in milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, [postId, addReadPost]);

  return null;
}
