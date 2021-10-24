import TutorialCard from "./TutorialCard";

export default function Tutorial() {
  return (
    <>
      <div className="flex justify-between gap-10">
        <TutorialCard heading={"Challenge"} />
        <TutorialCard heading={"Join"} />
        <TutorialCard heading={"Play"} />
      </div>
    </>
  );
}
