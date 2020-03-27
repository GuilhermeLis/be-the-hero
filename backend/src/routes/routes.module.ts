import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { OngsController } from './ongs/ongs.controller';
import { ServiceModule } from '../service/service.module'
import { IncidentsController } from './incidents/incidents.controller';
import { ProfileController } from './profile/profile.controller';
import { SessionController } from './session/session.controller';

@Module({
    imports: [ServiceModule],
    controllers: [OngsController, IncidentsController, ProfileController, SessionController],
    providers: [],
})
export class RoutesModule {}