import { Company } from "../domain/Company";
export default function getCompaniesFrance(query: string, active?: "A" | "C"): Promise<Company[]>;
