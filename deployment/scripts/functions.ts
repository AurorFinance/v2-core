import { ethers } from 'hardhat';
import * as dotenv from 'dotenv';

dotenv.config({path: process.cwd() + '/scripts/process.env'});

const adminAddresses = {
  feeToSetter: process.env.AEGIS_MANAGER_ADDRESS!,
	feeTo: process.env.AEGIS_TREASURY_ADDRESS!,
}

const GAS_LIMIT = 6000000;

export async function deployFactory() : Promise<string> {
	const [deployer] = await ethers.getSigners();
	console.log('ℹ️  Deploying contract with address:', deployer.address);

	const ContractSource = await ethers.getContractFactory('UniswapV2Factory');
	const deployedContract = await ContractSource.deploy(adminAddresses.feeToSetter);

	await deployedContract.deployed();

	console.log('😎 Contract deployed at:', deployedContract.address);

  console.log("✅ Deployment FACTORY passed");
	
	//set fee receiver
	//await deployedContract.setFeeTo(adminAddresses.feeTo);

	//get the init hash
	const hash = await deployedContract.INIT_CODE_PAIR_HASH();
	console.log('🧐 Init pair hash:', hash);

  return deployedContract.address;
}
