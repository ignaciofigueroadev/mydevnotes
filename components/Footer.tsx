// Shadcn/ui components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "./ui/separator";

// NEXT
import Link from "next/link";

// Icons
import {
  Contact2,
  FileText,
  LucideShieldQuestion,
  MessageSquare,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col gap-5">
      <Separator />
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-3 w-96">
          <h2 className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text text-3xl lg:text-2xl">
            &copy; My Dev Notes.
          </h2>
          <p className="text-xs opacity-75">
            Bite-sized insights into web development, tech trends, and more.
            Explore the digital world.
          </p>
          <p className="text-xs opacity-75">
            Designed by{" "}
            <a href="https://github.com/ignaciofigueroadev" target="_blank">
              Ignacio Figueroa
            </a>
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="hover:opacity-70 duration-100 flex items-center gap-1 opacity-75">
              <MessageSquare size={18} />
              <Link href="/posts">Read Posts</Link>
            </li>
            <li className="hover:opacity-70 duration-100 flex items-center gap-1 opacity-75">
              <FileText size={18} />
              <Link href="/articles">Explore Articles</Link>
            </li>
            <li className="hover:opacity-70 duration-100 flex items-center gap-1 opacity-75">
              <LucideShieldQuestion size={18} />
              <Dialog>
                <DialogTrigger>
                  <a>About</a>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>My Dev Notes</DialogTitle>
                    <DialogDescription>
                      I&apos;m developing this part of the code.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
            <li className="hover:opacity-70 duration-100 flex items-center gap-1 opacity-75">
              <Contact2 size={18} />
              <Dialog>
                <DialogTrigger>
                  <a>Contact me</a>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contact</DialogTitle>
                    <DialogDescription>
                      I&apos;m developing this part of the code.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
