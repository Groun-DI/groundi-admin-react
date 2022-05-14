class FormValuesUtils {
    static centerCreate = {
        name: '',
        address: '',
        detailAddress: '',
        phoneNumber: '',
        latitude: '',
        longitude: '',
        busniessLicenseNumber: '',
        businessAttachment: '',
    };
    static studioCreate = {
        centerId: '',
        description: '',
        content: '',
        checkInNotice: '',
        basicOccupancy: '2',
        maximumOccupancy: '4',
        overCharge: '',
        lowestPrice: '',
        highestPrice: '',
        precautionContent: '',
        refundCode: '',
        amenities: [''],
        precautions: [''],
        complimentaries: [''],
    };
    static centerParkingLotCreate = {
        isAvailable: '',
        paymentType: '',
        firstTime: '',
        firstPayment: '',
        additionTime: '',
        additionPayment: '',
        allDayPayment: '',
        oneTimePayment: '',
        content: '',
    };

    static studioRentalTime = {
        startTime: '',
        endTime: '',
        minimumReantalTime: '',
        rentalTimeUnit: ''
    }

    static studioHoliday = {
        date: '',
        reason: '',
    }

    static studioBreakTimeCreate = {
        week: '',
        startTime: '',
        endTime: '',
        reason: '',
    }
}


export default FormValuesUtils


export class StudioCreate {
    description: string;
    name: string;
    checkInNotice: string;
    basicOccupancy: number;
    maximumOccupancy: number;
    extraPrice: number;
    rentalTimeUnitCode: string;
    refundCode: string;
    amenities: string[];
    precautions: string[];
    complimentaries: string[];
}