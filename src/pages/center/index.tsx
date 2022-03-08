import AdminNavigation from "components/frame/AdminNavigation";
import { Outlet } from "react-router-dom";
const Page = () => {

    return (
        <>
            <AdminNavigation />
            <Outlet />
        </>
    )
}


export default Page;