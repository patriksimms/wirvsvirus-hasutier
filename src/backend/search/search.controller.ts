import {BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post} from '@nestjs/common';
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
        return await this.searchService.getSearchesByUserId(params.id).then(search => {
            return search;
        }, reason => {
            throw new NotFoundException(reason)
        });
    }


    @Get(':id')
    async getSearch(@Param() params): Promise<any> {
        return await this.searchService.getSearchById(params.id).then(search => {
            return search;
        }, reason => {
            throw new NotFoundException(reason)
        });
    }


    @Post()
    async createOffer(@Body() params: Search): Promise<Search> {
        return await this.searchService.createSearch(params).then(search => {
            return search;
        }, error => {
            throw new BadRequestException(error);
        });
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        this.searchService.deleteSearch(params);
    }
}
