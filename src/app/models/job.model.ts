import { Requirements } from "./requirements.model";
import { Role } from "./role.model";

export class Job {
    public apply: string;
    public company: string;
    public contract: string;
    public description: string;
    public id: number;
    public location: string;
    public logo: string;
    public logoBackground: string;
    public position: string;
    public postedAt: string;
    public requirements: Requirements;
    public role: Role;
    constructor (apply: string, company: string, contract: string, description: string,
        id: number, location: string, logo: string, logoBackground: string,
        position: string, postedAt: string, requirements: Requirements, role: Role) {
        this.apply = apply;
        this.company = company,
        this.contract = contract,
        this.description = description,
        this.id = id,
        this.location = location,
        this.logo = logo
        this.logoBackground = logoBackground,
        this.position = position,
        this.postedAt = postedAt,
        this.requirements = requirements,
        this.role = role
    }
}