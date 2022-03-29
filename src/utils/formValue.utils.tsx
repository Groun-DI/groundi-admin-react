class FormValuesUtils {
    static centerCreate = {
        name: '',
        address: '',
        detailAddress: '',
        frontPhoneNumber: '',
        phoneNumber: '',
        latitude: '',
        longitude: '',
        ceoName: '',
        busniessType: '',
        busniessCode: '',
        businessAttachment: '',
        adminPhonenumber: '',
        adminEmail: '',
        firstPhoneNumber: ''
    };
    static studioCreate = {
        centerId: '',
        name: '',
        content: '',
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
        parkingIsAvailable: 'true',
        parkingPaymentType: 'free',
        parkingFirstHour: '1 시간',
        parkingFirstMinute: '0 분',
        parkingFirstPayment: '',
        parkingAdditionHour: '1 시간',
        parkingAdditionMinute: '0 분',
        parkingAdditionPayment: '',
        parkingAllDayPayment: '',
        parkingOneTimePayment: '',
        parkingContent: '',
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

    static studioBreakTimeCreate = {
        date: '',
        startTime: '',
        endTime: '',
        reason: '',
    }
}


export default FormValuesUtils