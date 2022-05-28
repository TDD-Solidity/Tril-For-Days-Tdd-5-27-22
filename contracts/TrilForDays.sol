//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TrilForDays {
    uint256 constant payment_per_year = 10**12; // paid one trillion per year (from specs)
    uint256 constant wei_in_one_ether = 10**18;
    uint256 constant days_in_one_year = 365;

    function payForDays(uint256 _days) external pure returns (uint256 pay) {
        
        pay =_days * payment_per_year / days_in_one_year * wei_in_one_ether;
    }
}
