import Image from "next/image";
import { cn } from "./_lib/utils";
import { Logo } from "./_lib/icons";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-9rem)] container mx-auto flex items-center justify-center">
      <div className="flex -space-x-[210px] md:-space-x-[360px] ltr:space-x-reverse">
        <Folder
          title="ყველაფერი ბიზნესისთვის"
          description="თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები"
          label="და ბევრი სხვა"
          className="bg-[#00AEEF]"
        />
        <Folder
          title="ყველაფერი ბიზნესისთვის"
          description="თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები"
          label="ბიზნესის ფინანსირება"
          className="bg-[#B5B5B5]"
        />
        <Folder
          title="ყველაფერი ბიზნესისთვის"
          description="თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები"
          label="ბიზნესის ფინანსირება"
          className="bg-[#A65184]"
        />
        <Folder
          title="ყველაფერი ბიზნესისთვის"
          description="თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები"
          label="ბიზნეს სესხი"
          className="bg-[#4BB04F]"
        />
        <Folder
          title="ყველაფერი ბიზნესისთვის"
          description="თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები"
          label="აგრო სესხი"
          className="bg-[#2155C2]"
        />
        <Folder
          title="ყველაფერი ბიზნესისთვის"
          description="თუ იწყებ ბიზნესს, გამოიწერე სპეციალურად შენთვის შექმნილი სტარტაპ ნაკრები"
          label="სტარტაპ სესხი"
          content={true}
          className="bg-[#262B2E]"
        />
      </div>
    </main>
  );
}

function Folder({
  className,
  content,
  title,
  description,
  label,
}: {
  className?: string;
  content?: boolean;
  title: string;
  description: string;
  label: string;
}) {
  return (
    <div
      className={cn(
        "h-[420px] md:h-[600px] md:w-[400px] w-[240px] cutoff rounded-md flex items-end justify-between group transition-all peer-hover:translate-x-4 md:peer-hover:translate-x-10 peer",
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
                : "group-hover:text-xl md:group-hover:text-2xl group-hover:font-bold md:group-hover:translate-x-4 group-hover:translate-x-1.5",
            )}
          >
            {label}{" "}
            {!content ? (
              <span className="hover:block -rotate-90">&rarr;</span>
            ) : null}
          </h1>
        </div>
      </div>
      {content ? (
        <div className="flex flex-col w-fit gap-2 md:gap-4 py-5">
          <Image
            src="https://tbcbusiness.ge/file/uploads/Images/0c7553b2-f7d3-455b-b0ff-e65c210a835c.jpg"
            className="self-end w-full h-32 md:h-52 object-cover rounded-md rounded-r-none object-right-top"
            width={1280}
            height={720}
            alt="image"
          />
          <h2 className="text-xl md:text-4xl font-thin px-3 md:px-5 text-[#00AEEF]">
            {title}
          </h2>
          <p className="px-3 text-sm md:text-lg md:px-5">{description}</p>
        </div>
      ) : null}
    </div>
  );
}
