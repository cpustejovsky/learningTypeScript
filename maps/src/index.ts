import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
// let user = new User();
let company = new Company();

const map = new CustomMap("map", company.location.lat, company.location.lng);
