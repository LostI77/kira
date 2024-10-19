export type Product = {
  src: string;
  name: string;
  price: number;
};

export type ISCProduct = Product & { amount: number };

export type SupportCardData = { title: string; description: string };

export type Testimonial = {
  text: string;
  author: { avatar: string; name: string; role: string };
};
