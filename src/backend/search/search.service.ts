import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Search } from './search.entity';
import { Animal } from '../animal/animal.entity';
import { ServiceType } from '../services/services.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Search) private searchRepository: Repository<Search>,
    @InjectRepository(Animal) private animalRepository: Repository<Animal>,
    @InjectRepository(ServiceType) private serviceTypeRepository: Repository<ServiceType>,
  ) {
  }

  async getAllSearches(): Promise<Search[]> {
    return this.searchRepository.find({ relations: ['serviceTypes', 'animals', 'owner'] });
  }

  /**
   * Saves a new offer to the DB
   *
   * @param offerData The offer to save
   */
  async saveOffer(offerData: Search): Promise<Search> {
    console.log(offerData);

    return this.searchRepository.save(offerData);
  }

  async getSearchById(id: string): Promise<Search> {
    return await this.searchRepository.findOne(id,
      { relations: ['serviceTypes', 'animals', 'owner'] });
  }

  async getSearchesByUserId(userId: string): Promise<Search[]> {
    return await this.searchRepository.find({
      where: { owner: userId },
      relations: ['serviceTypes', 'animals', 'owner'],
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
