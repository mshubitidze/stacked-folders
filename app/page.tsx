import { FolderStack } from "./_components/folders";
import { HeroFolderSection } from "./_components/hero-folder-section";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10 justify-center pb-20">
      <HeroFolderSection />
      <FolderStack />
    </main>
  );
}
