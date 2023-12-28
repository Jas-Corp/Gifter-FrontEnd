import ApiService from "@/api/ApiService";

import { connectionInfo } from "../types/User";

export default async function registerRequest(info: connectionInfo) {
  return await ApiService.post("register", { ...info });
}
