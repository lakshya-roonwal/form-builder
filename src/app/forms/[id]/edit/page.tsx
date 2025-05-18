'use client'
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';

const FormBuilder = dynamic(() => import('@/components/editor/FormBuilder'), {
  ssr: false,
});
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20">
      <FormBuilder/>
    </div>
  );
}
