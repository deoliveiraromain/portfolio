import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experiences/experience.module';

@Module({
  imports: [ContactModule, ExperienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
