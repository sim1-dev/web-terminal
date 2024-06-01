import { Project } from "../project.model";
import { Customer } from "./customer.model";

export interface Experience {
    customer: Customer
    projects: Project[]
    finalCustomer?: Customer
}