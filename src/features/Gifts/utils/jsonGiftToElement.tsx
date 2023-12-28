import Gift from "../components/Gift/Gift";
import { gift } from "../types/gift";

export function jsonGiftToElement(jsonGift: gift) {
  return <Gift gift={jsonGift} key={jsonGift.link} />;
}

export function jsonGiftListToListOfElements(jsonGiftList: gift[]) {
  return jsonGiftList.map((jsonGift) => jsonGiftToElement(jsonGift));
}
