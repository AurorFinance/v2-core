import {setAllowedCaller} from './functions';

setAllowedCaller("0xa3e42D2309CB21cA7c7E8bf026494817901eb334", "0x0bbcfaba6099f7a076a2b35d90b022be68213e94")
    .catch(error => {
    console.log(error);
    console.log("Deployment failed 🛑");
    process.exit(1);
});

