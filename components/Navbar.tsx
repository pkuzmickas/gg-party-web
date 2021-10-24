import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex justify-between m-auto p-6">
      <Button
        className="text-red-500 hover:text-red-600 text-2xl  "
        image="/thanks.svg"
      >
        Donate
      </Button>
      <Button
        className="text-gray-200 hover:text-gray-300 text-2xl"
        image="/contact.svg"
      >
        Contact
      </Button>
    </div>
  );
}
