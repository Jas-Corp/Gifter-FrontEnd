import ApiService from "@/api/ApiService";

export default async function logoutRequest() {
  const response = await ApiService.post("logout");
  return response.data;
}
