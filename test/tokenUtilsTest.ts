import { expect } from 'chai';
import { TestContractTokenUtils } from '../typechain';
import { ethers as hardhatEthers } from 'hardhat';

describe('Token Utils Test Contract Deployment and Address Retrieval', function () {
  let contract: TestContractTokenUtils;
  let contractAddress: string;

  before(async function () {
    const TestContractTokenUtils = await hardhatEthers.getContractFactory('TestContractTokenUtils');
    contract = await TestContractTokenUtils.deploy();
    await contract.waitForDeployment();
    contractAddress = contract.target as string;
  });

  it('should deploy the contract and return a valid address', async function () {
    expect(contractAddress).to.be.a('string');
    expect(contractAddress).to.match(/^0x[a-fA-F0-9]{40}$/);
  });

  it('should test the isValidToken method', async function () {
    // We can trust the previus test statement that validates the contract address
    const valid = await contract.isValidToken(contractAddress);
    expect(valid).to.be.true;
  });
});
