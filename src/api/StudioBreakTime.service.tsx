import { CreateDto } from "dto/breakTime.dto";
import { useEffect } from "react";
import client from "services/axios";


export class StudioBreakTimeService {

    static async create(createBreakTimeDto: CreateDto) {
        const id = client.post('studio-breaktime', createBreakTimeDto);

        return id;
    }

    // static async findOne(centerId: number): Promise<string> {
    //     const firstStudioId = client.get('studio/' + centerId).then((res) => {
    //         if (res.data.length === 0) {
    //             return 0;
    //         }
    //         return res.data[0].id;
    //     });

    //     return firstStudioId;
    // }

    //   update(id: number, updateComplimentaryDto: UpdateComplimentaryDto) {
    //     return `This action updates a #${id} complimentary`;
    //   }

    //   remove(id: number) {
    //     return `This action removes a #${id} complimentary`;
    //   }
}
