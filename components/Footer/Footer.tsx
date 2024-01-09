import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="py-8 flex flex-col gap-5">
      <Separator />
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-3 w-96">
          <h2 className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text text-3xl lg:text-2xl animate-pulse">
            &copy; The Dev Notes 2023.
          </h2>
          <p className="text-xs opacity-75">
            Bite-sized insights into web development, tech trends, and more.
            Explore the digital world with us!
          </p>
          <p className="text-xs opacity-75">
            Designed by{" "}
            <a href="https:/github.com/ignaciofigueroadev" target="_blank">
              Ignacio Figueroa
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ul>
            <li>
              <Button variant="link">
                <a href="#">About us</a>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <a href="#">All posts</a>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <a href="#">Our developers</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
