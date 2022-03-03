import { NgsResAddressBody } from "dto/naver-geocoding.dto";
import client from "./axios";

const NaverGeocodingService = async (address: string): Promise<NgsResAddressBody[]> => {
    const addressInfo: NgsResAddressBody[] = await (
        client.get('center/' + address).then((res) => {
            return res.data.addresses;
        })
    );
    
    return addressInfo;
};

export default NaverGeocodingService;