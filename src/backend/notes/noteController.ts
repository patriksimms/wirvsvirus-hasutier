import { Controller, Get, Post, Delete, Body, Param, Res, HttpStatus, BadRequestException } from '@nestjs/common';
import { NoteService } from './noteService';


@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {
  }

}
