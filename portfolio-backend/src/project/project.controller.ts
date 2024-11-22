import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProject } from './models/create-project';
import { ProjectService } from './project.service';
import { Project } from './models/project';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Post()
  create(@Body() createProject: CreateProject): Project {
    return this.projectsService.create(createProject);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Project | undefined {
    return this.projectsService.findOne(id);
  }
}
