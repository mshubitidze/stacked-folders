import Image from "next/image";
import { cn } from "../_lib/utils";
import { Logo } from "../_lib/icons";

export const foldersData: Array<{
  title: string;
  description: string;
  label: string;
  color: string;
  content?: boolean;
  href: string;
}> = [
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲓᲐ ᲑᲔᲕᲠᲘ ᲡᲮᲕᲐ",
    color: "bg-[#00AEEF]",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲑᲘᲖᲜᲔᲡᲘᲡ ᲤᲘᲜᲐნსირება",
    color: "bg-[#B5B5B5]",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲑᲘᲖᲜᲔᲡᲘᲡ ᲤᲘᲜᲐნსირება",
    color: "bg-[#A65184]",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲑᲘᲖᲜᲔᲡ ᲡᲔᲡᲮᲘ",
    color: "bg-[#4BB04F]",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲐᲒᲠᲝ ᲡᲔᲡᲮᲘ",
    color: "bg-[#2155C2]",
    href: "/",
  },

  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲡᲢᲐᲠᲢᲐᲞ ᲡᲔᲡᲮᲘ",
    content: true,
    color: "bg-[#262B2E]",
    href: "/",
  },
];

export function Folder({
  className,
  content,
  title,
  description,
  label,
  href,
}: {
  className?: string;
  content?: boolean;
  title: string;
  description: string;
  label: string;
  href: string;
}) {
  return (
    <div
      // href={href}
      // target="_blank"
      className={cn(
        "h-[420px] md:h-[600px] md:w-[400px] w-[240px] lt-cutoff rounded-2xl flex items-end justify-between group transition-all peer-hover:translate-x-4 md:peer-hover:translate-x-6 peer",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-3 md:gap-5 justify-end h-full pt-16 md:pt-20 pb-5",
          content ? "px-3 md:px-4" : "pl-1 md:pl-2",
        )}
      >
        {content ? <Logo className="size-8 md:size-12 text-[#00AEEF]" /> : null}
        {content ? <div className="w-px bg-current flex-1" /> : null}
        <div className="vertical-rl">
          <h1
            className={cn(
              "text-left transform rotate-180 whitespace-nowrap transition-all",
              content
                ? "md:text-2xl text-xl font-bold"
                : "group-hover:text-xl md:group-hover:text-2xl group-hover:font-bold group-hover:translate-x-1.5",
            )}
          >
            {label}{" "}
            {/* {!content ? <span className="-rotate-90">&rarr;</span> : null} */}
          </h1>
        </div>
      </div>
      {content ? (
        <div className="flex flex-col w-fit gap-2 md:gap-4 py-5">
          <Image
            src="https://tbcbusiness.ge/file/uploads/Images/0c7553b2-f7d3-455b-b0ff-e65c210a835c.jpg"
            className="self-end w-full h-32 md:h-52 object-cover rounded-lg rounded-r-none object-right-top"
            width={468}
            height={468}
            alt="image"
          />
          <h2 className="text-xl md:text-4xl font-thin px-3 md:px-5 text-[#00AEEF]">
            {title}
          </h2>
          <p className="px-3 text-xs md:text-lg md:px-5 text-[#00AEEF]">
            {description}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function FolderStack() {
  return (
    <div className="flex -space-x-[210px] md:-space-x-[360px] ltr:space-x-reverse">
      {foldersData.map((folder, idx) => (
        <Folder
          key={idx}
          title={folder.title}
          description={folder.description}
          label={folder.label}
          content={folder.content}
          className={folder.color}
          href={folder.href}
        />
      ))}
    </div>
  );
}
