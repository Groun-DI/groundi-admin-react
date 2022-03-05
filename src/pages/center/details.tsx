import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "services/axios";
import styled from "styled-components";

const Page = () => {
    const [centers, setCenters] = useState<any[]>([]);

    useEffect(() => {
        client.get("center").then((res) => {
            console.log(res);
            setCenters(res.data);
        });
    }, []);

    return (
        <>
            <Body>
                {
                    centers.map((item, k) => (
                        <div key={k}>
                            <Link to={`/center/${item.id}/studio-new`}>
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
            </Body>
        </>
    )
}

const Body = styled.div`
    padding-top: 80px;
`

export default Page;