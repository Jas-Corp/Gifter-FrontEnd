import ApiService from "@/api/ApiService";

import { connectionInfo } from "../types/User";

export default async function signinRequest(info: connectionInfo) {
  return await ApiService.post("signin", { ...info });
}
