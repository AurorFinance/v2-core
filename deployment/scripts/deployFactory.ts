import {deployFactory} from './functions';

deployFactory()
    .catch(error => {
    console.log(error);
    console.log("Deployment failed 🛑");
    process.exit(1);
});

