import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContentCardBlue, {
  ContentCardYellow,
} from "../MockComponentst/MockContentCard.component";
import PushNotification from "../MockComponentst/PushNotification.component";

export default function NeverForget() {
  useGSAP(() => {
    gsap.to("#Day", {
      fill: "#8C8F8A",
      delay: 3,
      stagger: 0.25,
    });
  });

  return (
    <section
      style={{
        gridTemplateColumns: "480px auto 720px",
        backgroundImage: "url(/darkgradient.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[1280px] mx-auto  text-white py-6 grid   rounded-lg "
    >
      <div className="w-[480px] h-[480px] flex flex-col justify-center p-4 ">
        <h2 className="text-2xl font-semibold text-MT-onSurface ">
          Discover Warriors With Same Background as you{" "}
        </h2>
        <div className="mt-3 text-MT-onSurfaceVariant">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci
          repellendus odio animi inventore iusto saepe asperiores molestiae
          molestias iste.
        </div>
      </div>
      <div></div>
      <div
        style={{}}
        className="w-[720px] h-[480px] flex items-center justify-center  flex-col gap-4   "
      >
        <svg
          width="464"
          height="418"
          viewBox="0 0 464 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Calendar">
            <path
              id="Rectangle 4"
              d="M28 7.5H436C447.322 7.5 456.5 16.6782 456.5 28V410.5H7.5V28C7.5 16.6782 16.6782 7.5 28 7.5Z"
              fill="#302D2D"
              stroke="#C4C3CA"
              stroke-width="15"
            />
            <line
              id="Line 2"
              x1="16"
              y1="91"
              x2="446"
              y2="91"
              stroke="#C4C3CA"
              stroke-width="14"
            />
            <rect
              id="Day"
              x="64"
              y="142"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="64"
              y="230"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="64"
              y="318"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="156"
              y="318"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="248"
              y="318"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="340"
              y="318"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="156"
              y="230"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <path
              id="Vector 1"
              d="M351 341.472L364.575 354.795C365.797 355.995 367.775 355.93 368.915 354.651L390 331"
              stroke="#DF2929"
              stroke-width="10"
            />
            <rect
              id="Day"
              x="248"
              y="230"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="340"
              y="230"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="248"
              y="142"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="156"
              y="142"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
            <rect
              id="Day"
              x="340"
              y="142"
              width="57"
              height="52"
              rx="8"
              fill="#474847"
            />
          </g>
        </svg>

        {/* <PushNotification /> */}
      </div>
    </section>
  );
}
