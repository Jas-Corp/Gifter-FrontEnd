import { connectionInfo } from "@/features/Auth/types/User";

import isValidEmail from "./isValidEmail";
import isValidPassword from "./isValidPassword";

export default function isValidConnectionInfo(
  connectionInfo: connectionInfo
): string | true {
  if (!isValidEmail(connectionInfo.email))
    return "Must be a valid email address.";
  if (!isValidPassword(connectionInfo.password))
    return `Must be a valid password`;
  return true;
}
