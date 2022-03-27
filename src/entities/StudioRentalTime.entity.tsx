type StudioRentalTimeModal = {
    id: bigint;
    studioId: bigint;
    openTime: string;
    closeTime: string;
    minimumReantalTime: number;
    rentalTimeUnit: number;
}

export default StudioRentalTimeModal;