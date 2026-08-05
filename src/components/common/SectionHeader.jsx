import Button from "./Button";

function SectionHeader({
  title,
  buttonText,
  onClick,
}) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <Button onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export default SectionHeader;