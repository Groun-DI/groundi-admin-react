import { CreateDto } from "dto/breakTime.dto";
import StudioHolidayModal from "entities/StudioHoliday.entity";
import { useEffect } from "react";
import client from "services/axios";


export class StudioHolidayService {

    static async create(createBreakTimeDto: CreateDto) {
        const id = client.post('studio-breaktime', createBreakTimeDto);

        return id;
    }

    static async findOne(studioId: number, date: string): Promise<StudioHolidayModal> {
        const { data } = await client.get<StudioHolidayModal>(`studio-holiday/${studioId}/date/${date}`);

        return data;
    }

    //   update(id: number, updateComplimentaryDto: UpdateComplimentaryDto) {
    //     return `This action updates a #${id} complimentary`;
    //   }

    //   remove(id: number) {
    //     return `This action removes a #${id} complimentary`;
    //   }
}
