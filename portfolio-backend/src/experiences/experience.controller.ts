import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateExperience } from './models/create-experience';
import { ExperienceService } from './experience.service';
import { Experience } from './models/experience';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  create(@Body() createExperience: CreateExperience): Experience {
    return this.experienceService.create(createExperience);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Experience | undefined {
    return this.experienceService.findOne(id);
  }
}
