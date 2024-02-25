import {get} from "../../storage";

import {get_site_infos} from "../../utils";
const code_mode = process.env.REACT_APP_CODE_MODE;
const site_info = get_site_infos();
export const get_data = () => {
    return {
        cndp_declaration_number: "",
        company_address: "",
        company_capital: "",
        company_legal_status: "",
        company_name: "",
        responsable_address: "",
        responsable_full_name: "",
        site_name: site_info.site_name,
        site_url: code_mode === "prod" ? "" : code_mode === "preprod" ? "" : code_mode === "local_dev" ? "" : "http://localhost:3000",
    };
}
