export default function Input({ customSize, setCustomSize }) {
  return (
    <input
      type="number"
      id="customSize"
      min={1}
      value={customSize}
      onChange={(ev) => setCustomSize(ev.target.value)}
    />
  );
}
