export default function formEventToJsonInputData(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData);
  return data;
}
