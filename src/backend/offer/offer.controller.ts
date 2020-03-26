import {BadRequestException, Body, Controller, Delete, Get, Param, Post,} from '@nestjs/common';
import {OfferService} from './offer.service';
import {Offer} from './offer.entity';

@Controller('offer')
export class OfferController {
    constructor(private readonly offerService: OfferService) {
    }

    @Get()
    async getAllOffers(): Promise<Offer[]> {
        return await this.offerService.getAllOffers();
    }

    @Get('plz/:plz')
    async getOffersFromPlz(@Param() params): Promise<any> {
        let offers = await this.offerService.getOffersByPLZ(params.plz);
        if (offers === undefined) {
            throw new BadRequestException('offer id not found');
        }
        return offers;
    }

    @Get('user/:id')
    async getOfferByUser(@Param() params): Promise<any> {
        const offer = await this.offerService.getOfferByUserId(params.id);

        if (offer === undefined) {
            throw new BadRequestException('offer id not found');
        }
        return offer;
    }


    @Get(':id')
    async getOffer(@Param() params): Promise<any> {
        const offer = await this.offerService.getOfferById(params.id);

        if (offer === undefined) {
            throw new BadRequestException('offer id not found');
        }
        return offer;
    }


    @Post()
    async createOffer(@Body() params: Offer): Promise<Offer> {
        return await this.offerService.createOffer(params);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        this.offerService.deleteOffer(params.id);
    }

}
