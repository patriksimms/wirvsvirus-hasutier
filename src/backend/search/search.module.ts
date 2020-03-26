import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from './search.entity';
import { ServiceType } from '../services/services.entity';
import { Animal } from '../animal/animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Search, ServiceType, Animal])],
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {
}
