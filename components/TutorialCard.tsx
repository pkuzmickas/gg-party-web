export default function TutorialCard({ heading }) {
  return (
    <>
      <div className="flex flex-col w-full">
        <h2 className="text-5xl font-semibold text-red-500 mt-3 text-center">{heading}</h2>
        <div className="container mt-5 border-red-500 h-96 rounded-lg shadow-xl bg-gray-50"></div>
      </div>
    </>
  );
}
