import * as dotenv from 'dotenv';
import * as fs from 'fs';
import {deployFactory} from '../scripts/functions';

//This integration test module should be used inside the contracts repository's integration test!

dotenv.config({path: process.cwd() + '/scripts/process.env'});
export async function test() {
  const factory = await deployFactory();
  //save the addresses in tmp file for next steps
  fs.writeFile('integration-test/out/ammAddresses.json',
               JSON.stringify({"factory": factory}),
               error => {
                if (error) throw error;
               });

  console.log('✅ Factory integration test passed');
}

test()
  .catch(error => {
  console.log(error);
  console.log("🛑 Factory integration test failed");
  process.exit(1);
});
