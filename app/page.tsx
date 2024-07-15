import { FolderStack } from "./_components/folders";
import Image from "next/image";
import { Logo } from "./_lib/icons";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10 justify-center pb-20">
      <div className="w-full relative overflow-hidden">
        <div className="relative">
          <Image
            src="https://tbcbusiness.ge/file/uploads/Images/67effbd1-3878-4e4c-a0be-dc36c9f7ac76.jpg"
            alt="image"
            width={468}
            height={468}
            className="w-full object-cover md:max-h-[520px] h-[610px] object-right"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-[#2155C1]/20"></div>
        </div>
        <div className="absolute left-0 bottom-0 size-[380px] bg-[#02ADEE] card-one">
          <div className="absolute text-2xl left-5 top-5">
            <span className="text-xs flex items-center gap-1 mb-3">
              <Logo className="text-white size-4" />
              <strong>ᲗᲘᲑᲘᲡᲘ</strong> ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ
            </span>{" "}
            <strong>ᲠᲐ ᲣᲜᲓᲐ ᲑᲘᲖᲜᲔᲡᲡ?</strong>
          </div>
        </div>
        <a
          href="/"
          className="rounded-xl absolute left-[10px] bottom-[160px] w-[360px] h-[130px] card-two bg-[#2155C1] hover:scale-105 transition-all"
        >
          <p className="absolute left-[10px] top-[8px] text-xs">
            ᲡᲐᲛᲘ ᲔᲠᲗᲨᲘ ᲢᲔᲠᲛᲘᲜᲐᲚᲘ
          </p>
        </a>
        <a
          href="/"
          className="rounded-xl absolute left-[20px] bottom-[110px] w-[400px] h-[150px] card-three bg-[#49B04F] hover:scale-105 transition-all"
        >
          <p className="absolute left-[10px] top-[8px] text-xs">ᲐᲒᲠᲝ ᲡᲔᲡᲮᲘ</p>
        </a>
        <a
          href="/"
          className="rounded-xl absolute left-[30px] bottom-[80px] w-[360px] h-[150px] card-four bg-[#252B2D] hover:scale-105 transition-all"
        >
          <p className="absolute left-[10px] top-[8px] text-xs">
            ᲑᲘᲖᲜᲔᲡ ᲜᲐᲙᲠᲔᲑᲔᲑᲘ
          </p>
        </a>
        <a
          href="/"
          className="rounded-xl absolute left-[40px] bottom-[40px] w-[330px] h-[150px] card-five bg-[#A55283] hover:scale-105 transition-all"
        >
          <p className="absolute left-[10px] top-[8px] text-xs">
            ᲔᲠᲗᲒᲣᲚᲖᲔ ᲥᲣᲚᲔᲑᲘ ᲧᲕᲔᲚᲐ ᲑᲐᲠᲐᲗᲖᲔ
          </p>
        </a>
        <a
          href="/"
          className="rounded-xl absolute left-[50px] bottom-0 rounded-b-none w-[330px] h-[160px] card-six bg-[#B5B5B5] hover:scale-105 transition-all"
        >
          <p className="absolute left-[10px] top-[8px] text-xs">
            ᲓᲐ ᲑᲔᲕᲠᲘ ᲡᲮᲕᲐ
          </p>
        </a>
        <a
          href="/"
          className="rounded-xl rounded-b-none absolute left-[60px] bottom-0 w-[250px] h-[70px] card-seven bg-[#F9EE6E] hover:scale-105 transition-all"
        >
          <p className="absolute left-[10px] top-[8px] text-xs text-black">
            tbcbusiness.ge
          </p>
        </a>
      </div>
      <FolderStack />
    </main>
  );
}
