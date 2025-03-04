import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';

describe('Contract Deployment and Address Retrieval', function () {
  let contract: Contract;
  let contractAddress: string;

  // A teszt előtt deployoljuk a szerződést
  before(async function () {
    // Szerződés factory létrehozása
    const TestContractStringUtils = await ethers.getContractFactory('TestContractStringUtils');
    // Szerződés telepítése
    contract = await (TestContractStringUtils as any).deploy();
    // Várjuk meg, amíg a deploy befejeződik
    await contract.waitForDeployment();
    // Cím megszerzése
    contractAddress = contract.target as string;
  });

  it('should deploy the contract and return a valid address', async function () {
    // Ellenőrizzük, hogy a cím létezik-e és valid-e
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
    const resultEqual = await contract.substring(a, from, to);
    expect(resultEqual).to.equal("ny");
  });  
});
