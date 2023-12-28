import ApiService from "@/api/ApiService";

export default async function getGiftsRequest(numberOfGifts: number) {
  const response = await ApiService.get(`gifts/${numberOfGifts}`);
  return response;
}
