import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  href: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function WorkCard({ href, title, description, imageUrl, imageAlt }: WorkCardProps) {
  return (
    <Link 
      href={href}
      className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/80"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium md:text-3xl">{title}</h2>
          <p className="text-zinc-500">{description}</p>
        </div>
        <ArrowUpRight className="h-6 w-6 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1200}
          height={675}
          className="w-full"
        />
      </div>
    </Link>
  );
}
