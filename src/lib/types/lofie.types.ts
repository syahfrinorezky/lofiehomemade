import { ReactNode } from "react";

export interface LofieTypes {
  name: string;
  image?: ReactNode;
  description: string;
  contact: {
    address: string;
    phoneNumber: string;
  };
}
