import { Logo } from "../_lib/icons";

export function HeroFolderSection() {
  return (
    <div className="w-full relative h-[610px] sm:max-h-[520px] overflow-hidden">
      <div className="absolute left-0 bottom-0 h-full aspect-square bg-[#02ADEE] card-one">
        <div className="absolute text-3xl left-5 sm:top-10 top-16">
          <span className="text-sm flex items-center gap-1 mb-3">
            <Logo className="text-white size-4" />
            <strong>ᲗᲘᲑᲘᲡᲘ</strong> ᲑᲘᲖᲜᲔᲡᲘᲡᲗᲕᲘᲡ
          </span>{" "}
          <strong>ᲠᲐ ᲣᲜᲓᲐ ᲑᲘᲖᲜᲔᲡᲡ?</strong>
        </div>
      </div>
      <div className="rounded-xl absolute left-[10px] sm:left-[20px] bottom-[190px] w-[330px] sm:w-[420px] h-[200px] card-two bg-[#2155C1] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">
          ᲡᲐᲛᲘ ᲔᲠᲗᲨᲘ ᲢᲔᲠᲛᲘᲜᲐᲚᲘ
        </p>
      </div>
      <div className="rounded-xl absolute left-[20px] sm:left-[40px] bottom-[140px] w-[350px] sm:w-[520px] h-[200px] card-three bg-[#49B04F] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">ᲐᲒᲠᲝ ᲡᲔᲡᲮᲘ</p>
      </div>
      <div className="rounded-xl absolute left-[30px] sm:left-[60px] bottom-[90px] w-[300px] sm:w-[440px] h-[200px] card-four bg-[#252B2D] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">
          ᲑᲘᲖᲜᲔᲡ ᲜᲐᲙᲠᲔᲑᲔᲑᲘ
        </p>
      </div>
      <div className="rounded-xl absolute left-[40px] sm:left-[80px] bottom-[30px] w-[325px] sm:w-[400px] h-[200px] card-five bg-[#A55283] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg pr-10">
          ᲔᲠᲗᲒᲣᲚᲖᲔ ᲥᲣᲚᲔᲑᲘ ᲧᲕᲔᲚᲐ ᲑᲐᲠᲐᲗᲖᲔ
        </p>
      </div>
      <div className="rounded-xl absolute left-[50px] sm:left-[100px] bottom-0 rounded-b-none w-[320px] sm:w-[400px] h-[155px] sm:h-[170px] card-six bg-[#B5B5B5] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-lg">ᲓᲐ ᲑᲔᲕᲠᲘ ᲡᲮᲕᲐ</p>
      </div>
      <div className="rounded-xl rounded-b-none absolute left-[80px] sm:left-[120px] bottom-0 w-[240px] sm:w-[300px] h-[60px] sm:h-[80px] card-seven bg-[#F9EE6E] hover:scale-105 transition-all">
        <p className="absolute left-[10px] top-[8px] text-black">
          tbcbusiness.ge
        </p>
      </div>
    </div>
  );
}
