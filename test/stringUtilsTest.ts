import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';

describe('Contract Deployment and Address Retrieval', function () {
  let contract: Contract;
  let contractAddress: string;

  // Deploying the contract first
  before(async function () {
    // Creating the contract object
    const TestContractStringUtils = await ethers.getContractFactory('TestContractStringUtils');
    // Deploying the contract
    contract = await (TestContractStringUtils as any).deploy();
    // Waiting for the deployment
    await contract.waitForDeployment();
    // Getting the contract's address
    contractAddress = contract.target as string;
  });

  it('should deploy the contract and return a valid address', async function () {
    // Checking if the contract address exists and valid
    expect(contractAddress).to.be.a('string');
    expect(contractAddress).to.match(/^0x[a-fA-F0-9]{40}$/);
  });

  it('should test the concatenation method', async function () {
    let expectedString: string = 'TonyNagy';
    let a: string = 'Tony';
    let b: string = 'Nagy';
    const result = await contract.concatenation(a, b);
    expect(result).to.equal(expectedString);
  });

  it('should test the equals method', async function () {
    let a: string = 'Solidity';
    let b: string = 'Solidity';
    let c: string = 'Ethereum';
    const resultEqual = await contract.equals(a, b);
    expect(resultEqual).to.equal(true);
    const resultNotEqual = await contract.equals(a, c);
    expect(resultNotEqual).to.equal(false);
  });

  it('should test the contains method', async function () {
    let a: string = 'Tony Nagy';
    let b: string = 'Tony';
    let c: string = 'Ethereum';
    const resultEqual = await contract.contains(a, b);
    expect(resultEqual).to.equal(true);
    const resultNotEqual = await contract.contains(a, c);
    expect(resultNotEqual).to.equal(false);
  });  

  it('should test the substring method', async function () {
    let a: string = 'Tony Nagy';
    let from: number = 2;
    let to: number = 4;
    const result = await contract.substring(a, from, to);
    expect(result).to.equal("ny");
  });  

  it('should test the trim method', async function () {
    let stringWithSpaces: string = '    Tony            ';
    const result = await contract.trim(stringWithSpaces);
    expect(result).to.equal('Tony');
  });    
});
