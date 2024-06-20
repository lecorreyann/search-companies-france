export interface Company {
    code: string;
    name: string;
    address: string;
    active: boolean;
    naf: string;
    activity: string;
}
export interface CompanyPaginate {
    companies: Company[];
    total: number;
    page: number;
    perPage: number;
    totalPage: number;
    nbElements: number;
}
