import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from './noteController';
import { NoteService } from './noteService';
import { Note } from './note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NoteController],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {
}
