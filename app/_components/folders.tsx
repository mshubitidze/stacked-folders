import Image from "next/image";
import { cx } from "../_lib/utils";
import { Logo } from "../_lib/icons";

export type Folder = {
  title: string;
  description: string;
  label: string;
  bgColor: string;
  color: string;
  isFaceCard?: boolean;
  href: string;
};

export const colors = [
  "bg-[#00AEEF]",
  "bg-[#B5B5B5]",
  "bg-[#A65184]",
  "bg-[#4BB04F]",
  "bg-[#2155C2]",
  "bg-[#262B2E]",
] as const;

export const foldersData: Array<Folder> = [
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲓᲐ ᲑᲔᲕᲠᲘ ᲡᲮᲕᲐ",
    bgColor: "bg-[#00AEEF]",
    color: "text-white",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲑᲘᲖᲜᲔᲡᲘᲡ ᲤᲘᲜᲐᲜᲡᲘᲠᲔᲑᲐ 2",
    bgColor: "bg-[#B5B5B5]",
    color: "text-white",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲑᲘᲖᲜᲔᲡᲘᲡ ᲤᲘᲜᲐᲜᲡᲘᲠᲔᲑᲐ",
    bgColor: "bg-[#A65184]",
    color: "text-white",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲑᲘᲖᲜᲔᲡ ᲡᲔᲡᲮᲘ",
    bgColor: "bg-[#4BB04F]",
    color: "text-white",
    href: "/",
  },
  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲐᲒᲠᲝ ᲡᲔᲡᲮᲘ",
    bgColor: "bg-[#2155C2]",
    color: "text-white",
    href: "/",
  },

  {
    title: "ᲧᲕᲔᲚᲐᲤᲔᲠᲘ ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ",
    description:
      "თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები",
    label: "ᲡᲢᲐᲠᲢᲐᲞ ᲡᲔᲡᲮᲘ",
    isFaceCard: true,
    bgColor: "bg-[#262B2E]",
    color: "text-white",
    href: "/",
  },
];

export function Folder({
  className,
  isFaceCard,
  title,
  description,
  label,
  href,
}: {
  className?: string;
  isFaceCard?: boolean;
  title: string;
  description: string;
  label: string;
  href: string;
}) {
  return (
    <div
      className={cx(
        "h-[420px] md:h-[600px] md:w-[400px] w-[240px] lt-cutoff rounded-2xl flex items-end justify-between group transition-all peer-hover:translate-x-4 md:peer-hover:translate-x-6 peer",
        className,
      )}
    >
      <div
        className={cx(
          "flex flex-col items-center gap-3 md:gap-5 justify-end h-full pt-16 md:pt-20 pb-5",
          isFaceCard ? "px-3 md:px-4" : "pl-1 md:pl-2",
        )}
      >
        {isFaceCard ? <Logo className="size-8 md:size-12" /> : null}
        {isFaceCard ? <div className="w-px bg-current flex-1" /> : null}
        <div className="vertical-rl">
          <h1
            className={cx(
              "text-left transform rotate-180 whitespace-nowrap transition-all ease-in",
              isFaceCard
                ? "md:text-2xl text-xl font-bold"
                : "group-hover:text-xl md:group-hover:text-2xl group-hover:font-bold group-hover:translate-x-1.5",
            )}
          >
            {label}{" "}
            {/* {!faceCard ? <span className="-rotate-90">&rarr;</span> : null} */}
          </h1>
        </div>
      </div>
      {isFaceCard ? (
        <div className="flex flex-col w-fit gap-2 md:gap-4 py-5">
          <Image
            src="https://tbcbusiness.ge/file/uploads/Images/0c7553b2-f7d3-455b-b0ff-e65c210a835c.jpg"
            className="self-end w-full h-32 md:h-52 object-cover rounded-lg rounded-r-none object-right-top"
            width={468}
            height={468}
            alt="image"
          />
          <h2 className="text-xl md:text-4xl font-thin px-3 md:px-5">
            {title}
          </h2>
          <p className="px-3 text-xs md:text-lg md:px-5">{description}</p>
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
          isFaceCard={idx === foldersData.length - 1}
          className={[folder.bgColor, folder.color].join(" ")}
          href={folder.href}
        />
      ))}
    </div>
  );
}
