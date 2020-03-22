import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OfferService {

  constructor(
    @InjectRepository(Offer) private offerRepository: Repository<Offer>) {
  }

  async createOffer(data: Offer): Promise<Offer> {
    return await this.offerRepository.save(data);
  }

  async getOfferById(id: string): Promise<Offer> {
    return await this.offerRepository.findOne(id, { relations: ['serviceTypes', 'animalTypes'] });
  }

  async getOfferByUserId(userId: string): Promise<Offer[]> {
    return await this.offerRepository.find({
      where: { owner: userId },
      relations: ['serviceTypes', 'animalTypes'],
    });
  }

  async getOffersByPLZ(plz: string): Promise<Offer[]> {
    return await this.offerRepository.find({
      where: { plz: plz },
      relations: ['serviceTypes', 'animalTypes'],
    });
  }

  async deleteOffer(id: string) {
    await this.offerRepository.delete(id);
  }
}
