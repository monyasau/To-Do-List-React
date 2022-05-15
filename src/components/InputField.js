export default function InputField({onInput }) {
  return (
    <div className="my-3 mx-3 border border-dark border-1 w-75 rounded-2">
      <input onChange={onInput} className="px-2 py-3 w-100 border-0" placeholder="enter task" autoFocus />
    </div>
  );
}
