import { useQuery } from "react-query"

import { QueryKey } from "@/constants"
import { TermAndPolicyService } from "@/services"
import { TermAndPolicyModel } from "@/models"

const useFetchTermsAndPolicies = () => {
    return useQuery<TermAndPolicyModel, Error>({
        queryKey: [QueryKey.QUERY_KEY.TERMS_AND_POLICIES],
        queryFn: TermAndPolicyService.getAll,
    })
}

export default useFetchTermsAndPolicies