import { Injectable } from '@nestjs/common';
import { CreateProject } from './models/create-project';
import { Project } from './models/project';

@Injectable()
export class ProjectService {
  findOne(id: string): Project {
    throw new Error(`Method not implemented.` + id);
  }
  create(createProject: CreateProject): Project {
    throw new Error(`Method not implemented.` + createProject);
  }
}
