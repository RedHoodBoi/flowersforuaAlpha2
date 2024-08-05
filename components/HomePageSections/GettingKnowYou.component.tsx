import MockComboBox, {
  MockTagList,
} from "../MockComponentst/MockComboBox.component";

export default function GettingKnowYou() {
  return (
    <section
      style={{
        gridTemplateColumns: "auto auto",
        backgroundImage: "url(/darkgradient.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[1280px] mx-auto  text-white p-6 grid  gap-6 rounded-lg "
    >
      <div className="w-[480px] h-[480px] flex flex-col justify-center ">
        <h2 className="text-2xl font-semibold text-MT-onSurface ">
          Getting Know You
        </h2>
        <div className="mt-3 text-MT-onSurfaceVariant">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci
          repellendus odio animi inventore iusto saepe asperiores molestiae
          molestias iste.
        </div>
      </div>
      <div
        style={{}}
        className="w-[720px] h-[480px] flex items-center justify-center  "
      >
        <div className="absolute z-10">
          <MockTagList />
        </div>
        <div className="absolute z-20">
          <MockComboBox />
        </div>
      </div>
    </section>
  );
}
