import { ApiURL } from "@/constants"
import axiosService from "./axiosService"

const termAndPolicyService = {
    getAll: async () => {
        console.log("🚀 ~ return ~ piURL.API_TERM_AND_POLICY_SEARCH_URL:", ApiURL.API_TERM_AND_POLICY_SEARCH_URL)
        return (await axiosService())({
            baseURL: ApiURL.API_TERM_AND_POLICY_SEARCH_URL,
            method: "GET"
        })
            .then(res => res.data)
            .catch(err => { throw err })
    }
}

export default termAndPolicyService