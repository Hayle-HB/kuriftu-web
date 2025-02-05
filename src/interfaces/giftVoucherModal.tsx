export interface GiftItem {
  giftId: number;
  title: string;
  images: string[];
}

export interface GiftVoucherModal {
  title: string;
  description: string;
  gifts: GiftItem[];
  isPurchased: boolean;
}
