export default function ContentCardBlue() {
  return (
    <div className="w-[380px] bg-[#0057B7] text-[#FFDD00] aspect-video overflow-hidden rounded-2xl relative">
      <div className=" absolute left-0 bottom-0 w-full h-20 z-40 px-4">
        <div className="text-sm font-bold">Fellow Designer</div>
        <h2 className="font-semibold text-2xl text-black">Alex Shevchenko</h2>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://images.stockcake.com/public/3/b/2/3b2fadd9-98b8-4c17-9212-d02f9428389c_large/soldier-in-water-stockcake.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          aspectRatio: "16/9",
          maskImage: "linear-gradient(181deg, black -20%, transparent)",
        }}
      ></div>
    </div>
  );
}

export function ContentCardYellow() {
  return (
    <div className="w-[380px] bg-[#FFDD00] text-[#0057B7] aspect-video overflow-hidden rounded-2xl relative">
      <div className=" absolute left-0 bottom-0 w-full h-20 z-40 px-4">
        <div className="text-sm font-bold">Fellow Designer</div>
        <h2 className="font-semibold text-2xl text-black">Alex Shevchenko</h2>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://images.stockcake.com/public/4/8/2/4823483c-8b81-42ff-9858-ddfd5a0d061e_large/soldier-on-duty-stockcake.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          aspectRatio: "16/9",
          maskImage: "linear-gradient(181deg, black -20%, transparent)",
        }}
      ></div>
    </div>
  );
}
