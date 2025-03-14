import { expect } from 'chai';
import { ethers } from 'hardhat';
import { ExternalContract, TestContractHelperFunctions } from '../typechain';

describe('Helper Functions Tests: Contract Deployments and testing the decodeCustomError function', function () {
  let externalContract: ExternalContract;
  let testContract: TestContractHelperFunctions;

  beforeEach(async function () {
    // Deploy ExternalContract
    const ExternalContractFactory = await ethers.getContractFactory('ExternalContract');
    externalContract = (await ExternalContractFactory.deploy()) as ExternalContract;
    await externalContract.waitForDeployment();
    console.log('ExternalContract deployed at: ', externalContract.target);

    // Deploy TestContractHelperFunctions with the address of ExternalContract
    const TestContractHelperFunctionsFactory = await ethers.getContractFactory(
      'TestContractHelperFunctions'
    );
    testContract = (await TestContractHelperFunctionsFactory.deploy(
      externalContract.target
    )) as TestContractHelperFunctions;
    await testContract.waitForDeployment();
    console.log('TestContractHelperFunctions deployed at: ', testContract.target);
  });

  it("should convert uint 1234567890 input to '1234567890' string", async function () {
    const result = await testContract.uint2str(1234567890);
    expect(result).to.equal('1234567890');
    console.log('Converted string: ', result);
  });  

  it("should return 'Operation succeeded' for non-zero input", async function () {
    // Call execute with a non-zero value
    const result = await testContract.execute(5);
    expect(result).to.equal('Operation succeeded');
  });

  it('should return the custom error message for zero input', async function () {
    // Call execute with zero to trigger the Custom Error
    const result = await testContract.execute(0);
    // Getting the extracted sample code from the error catch!
    const sampleErrorCode = await externalContract.getSampleErrorCodeStr();
    expect(result).to.equal(
      'Caught CustomError: Value must be non-zero (code ' + sampleErrorCode + ')'
    );
    console.log('Extracted Custom Error code: ', sampleErrorCode);
  });
});
