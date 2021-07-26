import path from 'path';
import moduleAlias from 'module-alias';

const __dirname = path.resolve(path.dirname(''));
moduleAlias.addAliases({
    "$ecs-api-client": __dirname + "src/app.js",
    "$ecs-api-client/http": __dirname + "src/http",
    "$ecs-api-client/routes": __dirname + "src/routes",
    "$ecs-api-client/controllers": __dirname + "src/controllers",
    "$ecs-api-client/core": __dirname + "src/core"
});

moduleAlias();
