import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers as hardhatEthers } from 'hardhat';

describe('String Utils Test Contract Deployment and String Utility Function Calls', function () {
  let contract: Contract;
  let contractAddress: string;

  before(async function () {
    const TestContractStringUtils = await hardhatEthers.getContractFactory('TestContractStringUtils');
    contract = await TestContractStringUtils.deploy();
    await contract.waitForDeployment();
    contractAddress = contract.target as string;
  });

  it('should deploy the contract and return a valid address', async function () {
    expect(contractAddress).to.be.a('string');
    expect(contractAddress).to.match(/^0x[a-fA-F0-9]{40}$/);
  });

  it('should test the concatenation method', async function () {
    const expectedString: string = 'TonyNagy';
    const a: string = 'Tony';
    const b: string = 'Nagy';
    const result = await contract.concatenation(a, b);
    expect(result).to.equal(expectedString);
  });

  it('should test the equals method', async function () {
    const a: string = 'Solidity';
    const b: string = 'Solidity';
    const c: string = 'Ethereum';
    const resultEqual = await contract.equals(a, b);
    expect(resultEqual).to.be.true;
    const resultNotEqual = await contract.equals(a, c);
    expect(resultNotEqual).to.be.false;
  });

  it('should test the contains method', async function () {
    const a: string = 'Tony Nagy';
    const b: string = 'Tony';
    const c: string = 'Ethereum';
    const resultEqual = await contract.contains(a, b);
    expect(resultEqual).to.be.true;
    const resultNotEqual = await contract.contains(a, c);
    expect(resultNotEqual).to.be.false;
  });

  it('should test the substring method', async function () {
    const a: string = 'Tony Nagy';
    const from: number = 2;
    const to: number = 4;
    const result = await contract.substring(a, from, to);
    expect(result).to.equal('ny');
  });

  it('should test the trim method', async function () {
    const stringWithSpaces: string = '    Tony            ';
    const result = await contract.trim(stringWithSpaces);
    expect(result).to.equal('Tony');
  });

  it('should test the bytes32ToString method', async function () {
    const testBytes32: string = hardhatEthers.encodeBytes32String('Tony Nagy');
    const result = await contract.bytes32ToString(testBytes32);
    expect(result).to.equal('Tony Nagy');
  });

  it('should test the length method', async function () {
    const abcString: string = 'abc';
    const result = await contract.length(abcString);
    expect(result).to.equal(3);    
  });  
});