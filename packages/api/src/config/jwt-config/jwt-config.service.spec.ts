import { TestingModule, Test } from '@nestjs/testing';
import { JwtConfigService } from '~/config/jwt-config/jwt-config.service';
import { TypeOrmTestingModule } from '~/test-utils';

describe('JwtConfigService', () => {
  let service: JwtConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      TypeOrmTestingModule({
        controllers: [],
        providers: [JwtConfigService],
        entities: [],
      }),
    ).compile();
    service = module.get<JwtConfigService>(JwtConfigService);
  });

  it('should be defined', function () {
    expect(service).toBeDefined();
  });

  it('should be return access token', async () => {
    const token = await service.signToken({ username: 'chenc', userId: 1 });
    expect(token.access_token).toBeDefined();
  });
});
