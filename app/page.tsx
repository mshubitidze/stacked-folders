export default function Home() {
  return (
    <main className="min-h-screen container mx-auto flex items-end justify-center overflow-hidden">
      <div className="flex items-center gap-5">
        <Folder
          href="/"
          color="green"
          text="Lorem, ipsum dolor sit amet consectetur"
        />
        <Folder
          href="/"
          color="red"
          text="Lorem, ipsum dolor sit amet consectetur"
        />
        <Folder
          href="/"
          color="blue"
          text="Lorem, ipsum dolor sit amet consectetur"
        />
        <Folder
          href="/"
          color="yellow"
          text="Lorem, ipsum dolor sit amet consectetur"
        />
      </div>
    </main>
  );
}

function Folder({
  color,
  text,
  href,
}: {
  color: "green" | "red" | "yellow" | "blue";
  text: string;
  href: string;
}) {
  let bgColor = {
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
  }[color];

  return (
    <div
      className={cn(
        "size-80 translate-y-[80%] hover:translate-y-[30%] transition-all topRight p-5 rounded-md",
        bgColor,
      )}
    >
      <div className="pb-[40%] flex flex-col justify-between h-full">
        <p className="font-bold text-lg">{text}</p>
        <a
          href={href}
          className="self-end border px-2.5 py-1 rounded-md hover:bg-black/50 transition-all"
        >
          more
        </a>
      </div>
    </div>
  );
}

function cn(...cns: Array<string>) {
  return cns.filter(Boolean).join(" ");
}
