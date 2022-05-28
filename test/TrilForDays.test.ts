import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { parseEther } from "@ethersproject/units";

describe("TrilForDays", function () {

  let trilForDays: Contract;

  before(async () => {
    const TrilForDays = await ethers.getContractFactory("TrilForDays");
    trilForDays = await TrilForDays.deploy();
    await trilForDays.deployed();
  })

  describe('payForDays', () => {

    describe('returns correct amount of wei paid over number of days passed in', async () => {

      const testCases = [
        [0, '0'],
        [1, '2739726027'],
        [2, '5479452054'],
        [30, '82191780821'],
        [100, '273972602739'],
        [365, '1000000000000']
      ];

      testCases.forEach(async testCase => {

        const [daysInput, expectedEtherString] = testCase;

        it(`${daysInput} days pays ${expectedEtherString} ether`, async () => {

          const result = await trilForDays.payForDays(daysInput);

          expect(result).to.equal(parseEther(expectedEtherString as string));
        });

      });

    });

    /** 
     *  Deprecated - replaced by above "it.each" test(s)
     **/
    it('returns correct amount of wei paid over number of days passed in', async () => {

      const result = await trilForDays.payForDays(365);

      // assertion style 1
      expect(result.toString()).to.equal('1000000000000000000000000000000');

      // assertion style 2
      const n = BigInt('1000000000000000000000000000000');
      expect(n.toString()).to.equal('1000000000000000000000000000000');

      // assertion style 3
      expect(result).to.equal(parseEther((10 ** 12).toString()));

    });

  });

});
