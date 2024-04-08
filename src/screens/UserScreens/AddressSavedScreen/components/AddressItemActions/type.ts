import { UserAddressModel } from "@/models";

export interface AddressItemActionProps extends UserAddressModel {
    onDelete(): void
    onUpdate(): void
}