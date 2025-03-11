// /types/index.ts

// Type for each team member
export type TeamMember = {
    id: number;
    name: string;
    role: string;
    photo: string;
    email: string;
};

// Type for each product
export type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
};
