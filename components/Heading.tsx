export default function Heading() {
  return (
    <div className="p-12 flex mt-10 flex-col relative h-96">
      <div className="z-50">
        <div className="text-8xl font-bold text-gray-200 text-center">
          GeoGuessr <span className="text-red-600">Party</span>
          <h2 className="text-2xl font-bold text-gray-300 mt-3">
            Play GeoGuessr with your friends{" "}
            <span className="underline">together</span>!
          </h2>
        </div>
      </div>
      <div className="flex justify-center opacity-70">
        <img
          src="/playscreen1.png"
          alt="Play screen"
          className="w-96 rotate-12 absolute mr-100 bottom-10"
        />
        <img
          src="/playscreen1.png"
          alt="Play screen"
          className="w-96 z-10 bottom-10"
        />
        <img
          src="/playscreen1.png"
          alt="Play screen"
          className="w-96 -rotate-12 absolute ml-100 bottom-10"
        />
      </div>
    </div>
  );
}
