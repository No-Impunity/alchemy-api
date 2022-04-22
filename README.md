<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Nest Alchemy API module

## Description

[Alchemy Web3 API](https://www.npmjs.com/package/@alch/alchemy-web3) module for [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm i -s @darrenyeom/alchemy-api @alch/alchemy-web3
```

## Quickstart

> app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AlchemyApiModule } from '@darrenyeom/alchemy-api';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AlchemyApiModule.forRoot({
      alchemyUrl:
        'wss://eth-mainnet.alchemyapi.io/v2/<API_KEY>',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

> app.service.ts
```typescript
import { Injectable } from '@nestjs/common';
import { AlchemyApiService } from '@darrenyeom/alchemy-api';

@Injectable()
export class AppService {
  constructor(private readonly alchemyApiService: AlchemyApiService) {}

  async getBlockNumber() {
    return this.alchemyApiService.client.eth.getBlockNumber();
  }
}
```


## License

Nest is [MIT licensed](LICENSE).
