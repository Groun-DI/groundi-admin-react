import { NgsResAddressBody } from "dto/naver-geocoding.dto";
import client from "./axios";

const NaverGeocodingService = async (address: string): Promise<NgsResAddressBody[]> => {
    const addressInfo: NgsResAddressBody[] = await (
        client.get(process.env.REACT_APP_API_URL + 'centers/search/address', {
            params: {
                address: address
            }
        }).then((res) => {
            return res.data.results.juso;
        })
    );

    return addressInfo;
};

export default NaverGeocodingService;