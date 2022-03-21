class FormValuesUtils {
    static centerCreate = {
        name: '',
        address: '',
        detailAddress: '',
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
        amenities: [''],
        precautions: [''],
        complimentaries: [''],
        parkingIsAvailable: 'true',
        parkingPaymentType: '',
        parkingFirstTime: '',
        parkingFirstPayment: '',
        parkingAdditionTime: '',
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
    }
}


export default FormValuesUtils