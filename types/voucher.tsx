
export type Voucher = {
    _id?: string;
    code: string;
    quantity: number;
    discount: number;
    activeTime: Date;
    expriedTime: Date;
    users: string[];
}