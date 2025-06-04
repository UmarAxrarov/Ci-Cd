import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
// jobs:
// #     first_run:
// #         runs-on: ubuntu-latest
// #         steps:
// #             - name: Checkout code
// #               uses: actions/checkout@v4
// #             - name: npm i
// #               run: npm install
// #             - name: test
// #               run: npm test
// #             - name: build
// #               run: npm run build