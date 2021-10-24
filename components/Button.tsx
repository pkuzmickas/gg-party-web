export default function Button({ image = null, children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={"p-3 bg-transparent rounded w-64 flex align-middle gap-5 justify-center " + className}
    >
      {image && <img src={image} alt="" className="w-16 h-16 self-center" />}
      <div className="text-left font-medium self-center">{children}</div>
    </button>
  );
}
