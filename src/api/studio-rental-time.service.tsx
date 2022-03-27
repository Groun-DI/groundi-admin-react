import StudioRentalTimeModal from "entities/StudioRentalTime.entity";
import { useEffect } from "react";
import client from "services/axios";

export class StudioRentalTimeService {

    //   create(createComplimentaryDto: CreateComplimentaryDto) {
    //     return 'This action adds a new complimentary';
    //   }

    //   async findAll() {
    //     const complimentaries = await this.prismaService.complimentaryList.findMany();
    //     if (!complimentaries) throw new UnauthorizedException(UNAUTHORIZED_TYPE.USER_EXIST);
    //     return complimentaries;
    //   }

    static async findOne(studioId: string): Promise<StudioRentalTimeModal> {
        const { data } = await client.get<StudioRentalTimeModal>('studio-rentaltime/' + studioId);

        return data
    }

    //   update(id: number, updateComplimentaryDto: UpdateComplimentaryDto) {
    //     return `This action updates a #${id} complimentary`;
    //   }

    //   remove(id: number) {
    //     return `This action removes a #${id} complimentary`;
    //   }
}
