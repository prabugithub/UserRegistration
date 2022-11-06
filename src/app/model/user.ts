export interface User {
    id: string;
    userName: string;
    email: string;
    address: Address[];
}

interface Address {
    state: string;
    city: string;
    pincode: number;
}
