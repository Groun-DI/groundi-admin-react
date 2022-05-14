import { NgsResAddressBody } from "dto/naver-geocoding.dto";
import client from "./axios";

const NaverGeocodingService = async (address: string): Promise<NgsResAddressBody[]> => {
    const addressInfo: NgsResAddressBody[] = await (
        client.get(process.env.REACT_APP_API_URL + 'centers/addresses', {
            params: {
                keyword: address
            }
        }).then((res) => {
            console.log(res.data);
            return res.data;
        })
    );

    return addressInfo;
};

export default NaverGeocodingService;