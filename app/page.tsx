import Image from "next/image";
// import { FolderStack } from "./_components/folders";
import { HeroFolderSection } from "./_components/hero-folder-section";

import { Logo } from "./_lib/icons";
import { cx } from "./_lib/utils";
import { foldersData } from "./_components/folders";
import React from "react";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10 justify-center pb-20">
      piss bucket
    </main>
  );
}

function VerticalFolderStack() {
  return (
    <div className="flex items-center -space-x-[205px] sm:-space-x-[360px]">
      {foldersData.map((folder, idx) => (
        <div
          key={idx}
          className={cx(
            "rounded-xl w-[230px] h-[360px] peer peer-hover:translate-x-4 sm:peer-hover:translate-x-8 lt-cutoff sm:h-[600px] sm:w-[400px] group",
            folder.bgColor,
          )}
        >
          <div className="flex h-full">
            <div
              className={cx(
                "flex flex-col basis-1/6 pt-14 sm:pt-20 sm:pb-5 pb-3 justify-end items-center gap-5",
                idx === 5 ? "px-2" : "pr-8 sm:pl-2 pl-1",
              )}
            >
              {idx === 5 ? (
                <React.Fragment>
                  <Logo className="size-8 sm:size-10" />
                  <div className="w-px bg-white flex-1 h-full"></div>
                </React.Fragment>
              ) : null}
              <h1
                className={cx(
                  "vertical-lr rotate-180 whitespace-nowrap",
                  idx === 5
                    ? "text-xl sm:text-2xl font-semibold"
                    : "group-hover:text-lg text-sm sm:text-lg sm:group-hover:text-2xl group-hover:font-semibold group-hover:translate-x-1 sm:group-hover:translate-x-2.5",
                )}
              >
                {folder.label}
              </h1>
            </div>
            <div className="flex flex-col basis-5/6 items-center justify-end sm:gap-4 gap-2 pl-1 pb-3 sm:p-5 sm:pr-0">
              <Image
                src="https://tbcbusiness.ge/file/uploads/Images/0c7553b2-f7d3-455b-b0ff-e65c210a835c.jpg"
                className="sm:h-[240px] h-[128px] object-cover object-right-top rounded-l-xl"
                width={468}
                height={468}
                alt="image"
              />
              <div className="flex flex-col justify-center gap-2 sm:gap-4 px-2 sm:px-4 text-[#00AEEF]">
                <h2 className="sm:text-4xl font-thin text-xl">
                  {folder.title}
                </h2>
                <p className="text-xs sm:text-lg">{folder.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HorizontalFolders() {
  return (
    <div className="flex flex-col items-center -space-y-[220px] sm:-space-y-[320px]">
      {foldersData.map((f, idx) => (
        <div
          key={idx}
          className={cx(
            "rounded-xl rt-cutoff w-[calc(100vw-16px)] sm:w-[600px] h-[260px] sm:h-[360px] flex flex-col peer peer-hover:translate-y-3 group transition-all duration-200",
            f.bgColor,
          )}
        >
          <div
            className={cx(
              "flex items-center pr-14 sm:pr-20 gap-5 pl-4 sm:pl-5",
              f.isFaceCard ? "h-16 sm:h-20" : "h-10",
            )}
          >
            <h1
              className={cx(
                "font-bold transition-all",
                f.isFaceCard
                  ? "sm:text-2xl text-xl"
                  : "group-hover:text-lg sm:group-hover:text-xl group-hover:translate-y-1.5 sm:group-hover:translate-y-2",
              )}
            >
              {f.label}
            </h1>
            {f.isFaceCard ? (
              <React.Fragment>
                <div className="h-px flex-1 bg-white"></div>
                <Logo className="size-8 sm:size-12" />
              </React.Fragment>
            ) : null}
          </div>
          {f.isFaceCard ? (
            <div className="flex items-center gap-5 flex-1">
              <Image
                src="https://tbcbusiness.ge/file/uploads/Images/0c7553b2-f7d3-455b-b0ff-e65c210a835c.jpg"
                className="object-cover w-[160px] sm:w-auto object-right-top rounded-r-xl"
                width={468}
                height={468}
                alt="image"
              />
              <div className="flex flex-col gap-2 sm:gap-4 px-2 sm:px-4 pr-5">
                <h2 className="sm:text-4xl font-thin text-xl">{f.title}</h2>
                <p className="text-xs sm:text-lg">{f.description}</p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
