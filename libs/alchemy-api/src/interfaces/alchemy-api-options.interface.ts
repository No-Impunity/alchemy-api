import { createAlchemyWeb3 } from '@alch/alchemy-web3';

type AlchemyWeb3Config = Parameters<typeof createAlchemyWeb3>[1];

export interface AlchemyApiModuleOptions extends AlchemyWeb3Config {
  alchemyUrl: string;
}
