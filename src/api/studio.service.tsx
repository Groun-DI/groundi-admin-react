import { useEffect } from "react";
import client from "services/axios";

export class StudioService {

    //   create(createComplimentaryDto: CreateComplimentaryDto) {
    //     return 'This action adds a new complimentary';
    //   }

    //   async findAll() {
    //     const complimentaries = await this.prismaService.complimentaryList.findMany();
    //     if (!complimentaries) throw new UnauthorizedException(UNAUTHORIZED_TYPE.USER_EXIST);
    //     return complimentaries;
    //   }

    static async findOne(centerId: number): Promise<string> {
        const firstStudioId = client.get('studio/' + centerId).then((res) => {
            if (res.data.length === 0) {
                return 0;
            }
            return res.data[0].id;
        });

        return firstStudioId;
    }

    //   update(id: number, updateComplimentaryDto: UpdateComplimentaryDto) {
    //     return `This action updates a #${id} complimentary`;
    //   }

    //   remove(id: number) {
    //     return `This action removes a #${id} complimentary`;
    //   }
}
