import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header.component";
import { useRef } from "react";
import MockComboBox, {
  MockTagList,
} from "@/components/MockComponentst/MockComboBox.component";
import GettingKnowYou from "@/components/HomePageSections/GettingKnowYou.component";
import DiscoverWarriors from "@/components/HomePageSections/DiscoverWarriors.component";
import NeverForget from "@/components/HomePageSections/NeverForget.component";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col gap-20">
        <GettingKnowYou />
        <DiscoverWarriors />
        <NeverForget />
      </div>
    </>
  );
}
