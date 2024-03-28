export interface UserAddressModel {
    city?: string,
    cityId?: string,
    district?: string,
    districtId?: string,
    ward?: string,
    wardId?: string,
    location?: string,
    fullName?: string,
    phoneNumber?: string,
    isDefault?: boolean
}

export interface UserAddressResponse {
    customerId?: string
    addressList?: UserAddressModel[]
}

export interface UserAddressRequest {
    customerId?: string
    addressItem?: UserAddressModel
}