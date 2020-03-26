import {BadRequestException, Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {SearchService} from './search.service';
import {Search} from './search.entity';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) {
    }

    @Get()
    async getAllSearches(): Promise<Search[]> {
        return await this.searchService.getAllSearches();
    }

    @Get('plz/:plz')
    async getSearchesFromPlz(@Param() params): Promise<any> {
        const offers = await this.searchService.getSearchesByPLZ(params.plz);
        if (offers === undefined) {
            throw new BadRequestException('offer id not found');
        }
        return offers;
    }

    @Get('user/:id')
    async getSearchByUser(@Param() params): Promise<any> {
        const offer = await this.searchService.getSearchesByUserId(params.id);

        if (offer === undefined) {
            throw new BadRequestException('offer id not found');
        }
        return offer;
    }


    @Get(':id')
    async getSearch(@Param() params): Promise<any> {
        const offer = await this.searchService.getSearchById(params.id);

        if (offer === undefined) {
            throw new BadRequestException('offer id not found');
        }
        return offer;
    }


    @Post()
    async createOffer(@Body() params: Search): Promise<Search> {
        return await this.searchService.createSearch(params);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        this.searchService.deleteSearch(params.id);
    }
}
