export default function InputField({ edited, onInput}) {
  return (
    <>
      <input onChange={onInput} placeholder="enter task" />
    </>
  );
}
