import client from "./axios";

const NaverGeocodingService = async <T, A>(address: T): Promise<A[]> => {
    const addressInfo: A[] = await (
        client.get(process.env.REACT_APP_API_URL + 'centers/addresses', {
            params: {
                keyword: address
            }
        }).then((res) => {
            return res.data;
        })
    );

    return addressInfo;
};

export default NaverGeocodingService;