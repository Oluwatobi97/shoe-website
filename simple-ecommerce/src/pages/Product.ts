export type Category =
  | "shoes"
  | "bags"
  | "halfshoe"
  | "sneakers"
  | "belts"
  | "pam";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}
