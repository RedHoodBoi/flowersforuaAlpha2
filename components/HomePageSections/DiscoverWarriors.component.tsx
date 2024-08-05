import ContentCardBlue, {
  ContentCardYellow,
} from "../MockComponentst/MockContentCard.component";

export default function DiscoverWarriors() {
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
        <ContentCardBlue />
        <ContentCardYellow />
      </div>
    </section>
  );
}
