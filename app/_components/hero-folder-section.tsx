import Image from "next/image";
import { Logo } from "../_lib/icons";

export function HeroFolderSection() {
  return (
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
      <div className="absolute left-0 bottom-0 h-full aspect-square bg-[#02ADEE] card-one">
        <div className="absolute text-3xl left-5 top-5">
          <span className="text-sm flex items-center gap-1 mb-3">
            <Logo className="text-white size-4" />
            <strong>ᲗᲘᲑᲘᲡᲘ</strong> ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ
          </span>{" "}
          <strong>ᲠᲐ ᲣᲜᲓᲐ ᲑᲘᲖᲜᲔᲡᲡ?</strong>
        </div>
      </div>
      <div className="rounded-xl absolute left-[10px] md:left-[20px] bottom-[220px] w-[350px] md:w-[420px] h-[200px] card-two bg-[#2155C1] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">
          ᲡᲐᲛᲘ ᲔᲠᲗᲨᲘ ᲢᲔᲠᲛᲘᲜᲐᲚᲘ
        </p>
      </div>
      <div className="rounded-xl absolute left-[20px] md:left-[40px] bottom-[150px] w-[400px] md:w-[520px] h-[220px] card-three bg-[#49B04F] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">ᲐᲒᲠᲝ ᲡᲔᲡᲮᲘ</p>
      </div>
      <div className="rounded-xl absolute left-[30px] md:left-[60px] bottom-[120px] w-[360px] md:w-[440px] h-[200px] card-four bg-[#252B2D] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">
          ᲑᲘᲖᲜᲔᲡ ᲜᲐᲙᲠᲔᲑᲔᲑᲘ
        </p>
      </div>
      <div className="rounded-xl absolute left-[40px] md:left-[80px] bottom-[60px] w-[340px] md:w-[400px] h-[200px] card-five bg-[#A55283] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg pr-10">
          ᲔᲠᲗᲒᲣᲚᲖᲔ ᲥᲣᲚᲔᲑᲘ ᲧᲕᲔᲚᲐ ᲑᲐᲠᲐᲗᲖᲔ
        </p>
      </div>
      <div className="rounded-xl absolute left-[50px] md:left-[100px] bottom-0 rounded-b-none w-[340px] md:w-[400px] h-[180px] md:h-[200px] card-six bg-[#B5B5B5] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">ᲓᲐ ᲑᲔᲕᲠᲘ ᲡᲮᲕᲐ</p>
      </div>
      <div className="rounded-xl rounded-b-none absolute left-[80px] md:left-[120px] bottom-0 w-[240px] md:w-[300px] h-[60px] md:h-[80px] card-seven bg-[#F9EE6E] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-black">
          tbcbusiness.ge
        </p>
      </div>
    </div>
  );
}
