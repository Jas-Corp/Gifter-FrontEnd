import ApiService from "@/api/ApiService";

export default async function imAuthRequest() {
  return await ApiService.get("me");
}
