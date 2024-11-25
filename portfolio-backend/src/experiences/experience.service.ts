import { Injectable } from '@nestjs/common';
import { CreateExperience } from './models/create-experience';
import { Experience } from './models/experience';

@Injectable()
export class ExperienceService {
  findOne(id: string): Experience {
    throw new Error(`Method not implemented.` + id);
  }
  create(createProject: CreateExperience): Experience {
    throw new Error(`Method not implemented.` + createProject);
  }
}
