import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ContactModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
