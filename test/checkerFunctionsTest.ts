import { expect } from 'chai';
import { TestContractCheckerFunctions } from '../typechain';
import { ethers as hardhatEthers } from 'hardhat';

describe('Checker Functions Utils Test Contract Deployment and Address Retrieval', function () {
  let contract: TestContractCheckerFunctions;
  let contractAddress: string;

  before(async function () {
    
    const TestContractCheckerFunctions = await hardhatEthers.getContractFactory(
      'TestContractCheckerFunctions'
    );
    contract = (await TestContractCheckerFunctions.deploy()) as TestContractCheckerFunctions;
    await contract.waitForDeployment();
    contractAddress = contract.target as string;
  });

  it('should deploy the contract and return a valid address', async function () {
    expect(contractAddress).to.be.a('string');
    expect(contractAddress).to.match(/^0x[a-fA-F0-9]{40}$/);
  });
/*
  it('should test the onlyOwnerChecker method with valid owner', async function () {    
    const result = await contract.onlyOwnerChecker(contractAddress);
    expect(result).to.be.true;
  });
  */
});
