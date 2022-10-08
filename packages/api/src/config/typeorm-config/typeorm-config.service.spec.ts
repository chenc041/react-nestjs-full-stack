import { TestingModule, Test } from '@nestjs/testing';
import { TypeOrmTestingModule } from '~/test.utils';
import { TypeOrmConfigService } from '~/config/typeorm-config/typeorm-config.service';

describe('TypeOrmConfigService', () => {
  let service: TypeOrmConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      TypeOrmTestingModule({
        controllers: [],
        providers: [TypeOrmConfigService],
        entities: [],
      }),
    ).compile();
    service = module.get<TypeOrmConfigService>(TypeOrmConfigService);
  });

  it('should be defined', function () {
    expect(service).toBeDefined();
  });

  it('should be return typeorm config', async () => {
    const config = await service.createTypeOrmOptions('chenc');
    expect(config.database).toBe('test_app');
  });
});
