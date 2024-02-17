import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="w-12 h-22 flex flex-col justify-center rounded-md gap-1">
        <div className="h-2 w-8 bg-yellow-400 rounded"></div>
        <div className="h-2 w-14 bg-green-400 rounded"></div>
        <div className="h-2 w-7 bg-blue-400 rounded"></div>
        <div className="h-2 w-9 bg-indigo-400 rounded"></div>
        <div className="h-2 w-14 bg-pink-400 rounded"></div>
      </div>
    </Link>
  );
}
