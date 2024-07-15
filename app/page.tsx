import Image from "next/image";
import { MotionDiv } from "./_lib/framer";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto flex items-center justify-center">
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

function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8945 17.7202C16.038 19.2318 16.1139 20.0171 14.8893 21.3092C12.5472 23.5071 9.95366 25.4204 7.16301 27.0092C5.67532 27.8817 4.12248 28.6383 2.51851 29.2724C1.47944 29.6524 0.592931 29.8129 0.162458 29.0529C0.0552523 28.8466 0 28.6179 0 28.3857C0 28.1536 0.0552523 27.9248 0.162458 27.7186C1.30214 24.6364 4.57027 18.894 6.70697 15.1532C6.92633 14.7731 7.14569 14.3762 7.38237 13.9794C10.6587 8.313 14.9824 1.38006 15.8269 0.265422C15.9539 0.104922 16.1815 -0.0808334 16.3844 0.0374026C16.4116 0.0570915 16.4355 0.0798728 16.4569 0.105231C16.4883 0.142856 16.513 0.186048 16.5295 0.232951C16.5567 0.3115 16.5592 0.396543 16.5361 0.476536L16.4924 0.651364L16.4602 0.78898C15.0501 6.51431 15.2018 12.13 15.8525 17.7202H15.8945ZM20.6907 19.4852C19.3144 18.8603 18.5969 18.531 18.0898 16.8252C17.355 13.6983 16.9946 10.495 17.0177 7.28289C17.0086 6.30907 17.0424 5.33576 17.1191 4.36575C17.1777 3.61871 17.2626 2.87362 17.3723 2.13174C17.5752 1.0339 17.8704 0.18945 18.7487 0.18945C18.9804 0.201511 19.2055 0.269236 19.4051 0.386854C19.6055 0.504471 19.7737 0.668476 19.8974 0.865055C21.9995 3.39842 25.3435 9.09849 27.4975 12.814L28.1729 13.9794C31.441 19.6542 35.2658 26.8996 35.773 28.1916C35.8488 28.3774 35.8991 28.6729 35.688 28.7911C35.6476 28.8074 35.6047 28.8172 35.5619 28.8205C35.5231 28.8234 35.4843 28.821 35.4464 28.8132C35.401 28.8039 35.3573 28.7871 35.3178 28.7638C35.2864 28.7458 35.2576 28.7238 35.232 28.6983L35.0044 28.4787C30.7821 24.3916 25.8168 21.723 20.6487 19.4852H20.6907ZM16.8627 22.6862L16.7645 22.7533C12.2462 26.1226 7.46731 29.0529 1.80106 30.6995L1.49676 30.784C1.41429 30.803 1.33925 30.8474 1.28317 30.911C1.2271 30.9747 1.19246 31.0543 1.18421 31.1386C1.18421 31.3751 1.46295 31.5018 1.66582 31.5018C3.05042 31.6876 11.2335 32 17.7863 32H19.1371L19.26 31.9994C23.5696 31.9739 30.0869 31.9357 33.2899 31.3836C33.5225 31.3744 33.7493 31.3089 33.9513 31.1927C34.1525 31.0765 34.3232 30.9131 34.4469 30.7164C34.8865 29.9648 34.3034 29.2809 33.459 28.5631C32.9972 28.197 32.5255 27.8433 32.0447 27.5024C31.1186 26.8449 30.1587 26.235 29.1691 25.675C26.4007 24.0523 23.4501 22.7625 20.379 21.8327C18.6934 21.4301 18.0329 21.8832 16.8627 22.6862Z"
        fill="currentColor"
      />
    </svg>
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
                : "group-hover:text-xl md:group-hover:text-2xl group-hover:font-bold group-hover:translate-x-1.5",
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

function cn(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}
