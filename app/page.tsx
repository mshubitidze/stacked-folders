import Image from "next/image";
import { FolderStack } from "./_components/folders";
import { HeroFolderSection } from "./_components/hero-folder-section";

import { Logo } from "./_lib/icons";
import { cx } from "./_lib/utils";
import { foldersData } from "./_components/folders";
import React from "react";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10 justify-center pb-20">
      <HeroFolderSection />
      {/* <FolderStack /> */}
      <NewStack />
    </main>
  );
}

function NewStack() {
  return (
    <div className="flex items-center -space-x-[210px] md:-space-x-[360px]">
      {foldersData.map((folder, idx) => (
        <div
          key={idx}
          className={cx(
            "rounded-xl w-[240px] h-[360px] peer peer-hover:translate-x-4 md:peer-hover:translate-x-8 lt-cutoff md:h-[600px] md:w-[400px] transition-all group",
            folder.bgColor,
          )}
        >
          <div className="flex h-full">
            <div
              className={cx(
                "flex flex-col basis-1/6 pt-14 md:pt-20 md:pb-5 pb-3 justify-end items-center gap-5",
                idx === 5 ? "px-2" : "pr-8 md:pl-2 pl-1",
              )}
            >
              {idx === 5 ? (
                <React.Fragment>
                  <Logo className="size-8 md:size-10" />
                  <div className="w-px bg-white flex-1 h-full"></div>
                </React.Fragment>
              ) : null}
              <h1
                className={cx(
                  "vertical-lr rotate-180",
                  idx === 5
                    ? "text-lg md:text-2xl font-semibold"
                    : "group-hover:text-lg text-sm md:group-hover:text-2xl group-hover:font-semibold transition-all group-hover:translate-x-1 md:group-hover:translate-x-2.5",
                )}
              >
                {folder.label}
              </h1>
            </div>
            <div className="flex flex-col basis-5/6 items-center justify-end md:gap-4 gap-2 pl-1 pb-3 md:p-5 md:pr-0">
              <Image
                src="https://tbcbusiness.ge/file/uploads/Images/0c7553b2-f7d3-455b-b0ff-e65c210a835c.jpg"
                className="md:h-[240px] h-[128px] object-cover object-right-top rounded-l-xl"
                width={468}
                height={468}
                alt="image"
              />
              <div className="flex flex-col justify-center gap-2 md:gap-4 px-2 md:px-4 text-[#00AEEF]">
                <h2 className="md:text-4xl font-thin text-xl">
                  {folder.title}
                </h2>
                <p className="text-xs md:text-lg">{folder.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
