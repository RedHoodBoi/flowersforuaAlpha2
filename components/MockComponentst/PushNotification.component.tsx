import Sunflower, { ChevronDonw } from "@/Icons/IconsLibrary.components";
import { Inter } from "next/font/google";
const interFont = Inter({ subsets: ["latin"] });
export default function PushNotification() {
  return (
    <div
      className={`w-[320px] flex-col  rounded-xl p-3 bg-MT-primaryContainer gap-3 ${interFont.className}`}
    >
      <div className="flex w-full gap-3">
        <div>
          <Sunflower height={32} width={32} />
        </div>
        <div className="text-MT-onPrimaryContainer text-sm">
          <h4 className="font-bold tracking-tighter">Birthday Alert 🎂</h4>
          <div className=" text-xs mt-1">
            Your peer and defender of Ukraine Alex celebrates birthday. Join The
            Celebration!
          </div>
        </div>
        <div>
          <ChevronDonw width={24} height={24} />
        </div>
      </div>
      <div className="grid grid-cols-2  divide-x w-full mt-3 text-MT-onPrimaryContainer text-xs font-bold">
        <div className="text-center">Read Story</div>
        <div className="text-center">Share</div>
      </div>
    </div>
  );
}
