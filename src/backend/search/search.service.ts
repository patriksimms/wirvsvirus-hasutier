import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Search } from './search.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Search) private searchRepository: Repository<Search>,
  ) {}

  async getAllSearches(): Promise<Search[]> {
    return this.searchRepository.find();
  }

  async createSearch(data: Search): Promise<Search> {
    return await this.searchRepository.save(data);
  }

  async getSearchById(id: string): Promise<Search> {
    return await this.searchRepository.findOne(id,
      { relations: ['serviceTypes', 'animals'] });
  }

  async getSearchesByUserId(userId: string): Promise<Search[]> {
    return await this.searchRepository.find({
      where: { owner: userId },
      relations: ['serviceTypes', 'animals'],
    });
  }

  async getSearchesByPLZ(plz: string): Promise<Search[]> {
    return await this.searchRepository.find({
      where: { plz: plz },
      relations: ['serviceTypes', 'animals'],
    });
  }

  async deleteSearch(id: string) {
    await this.searchRepository.delete(id);
  }

}
