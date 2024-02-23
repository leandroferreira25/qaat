export interface Pets {
    id: number;
    name: string;
    category: {
      id: number;
      name: string;
    };
    photoUrls: string[];
    tags: {
      id: number;
      name: string;
    }[]; // Array of objects with tag properties
    status: "available" | "pending" | "sold";
  }