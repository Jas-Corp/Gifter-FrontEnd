const emailRegex = /\S+@\S+\.\S+/;

export default function isValidEmail(email: string) {
  return emailRegex.test(email);
}
