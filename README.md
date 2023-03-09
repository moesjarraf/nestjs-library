[Nest.js](https://github.com/nestjs/nest) 3rd party libraries

## Description

This Nest.js module comes with several modules which provide an integration with different 3rd party services.
The module contains a sub module for each service, which can either be imported individually, or collectively by importing the `LibraryModule`.
See the [module folder](https://github.com/moesjarraf/nestjs-library/tree/master/src/modules) for the available sub modules that you can import.

```ts
// app.module.ts
import { Module } from '@nestjs/common';
import { LibraryModule } from '@moesjarraf/nestjs-library';

@Module({
  imports: [LibraryModule],
})
export class AppModule {}
```

## Installation

```bash
$ npm install @moesjarraf/nestjs-library
```

## Configuration

The modules by default load their configuration through `.env` files which are placed in the root folder. These can be suffixed with the environment.
The available suffixes can be found below, and are loaded in the order as they are displayed.

```ts
'.env.development.local',
'.env.development',
'.env.staging',
'.env.production',
'.env.test',
'.env',
```

The default configuration for each sub module can be found below, and can be changed by modifying the env variables.

### Recaptcha v2

```bash
CAPTCHA_SITE_KEY=
CAPTCHA_SECRET_KEY=
CAPTCHA_ENABLED=
```

### Keycloak

An example keycloak realm configuration can be found [here](https://github.com/moesjarraf/nestjs-example/blob/master/backend/realm-export.json).

```bash
KEYCLOAK_URL=http://127.0.0.1:8080
KEYCLOAK_REALM=nestjs
KEYCLOAK_CLIENT=nestjs
KEYCLOAK_SECRET=secret
```

## Example

See [this](https://github.com/moesjarraf/nestjs-example) repository for an example.

## Contributing

Commit messages should be formatted according to semantic-release standards, see [this](https://github.com/semantic-release/semantic-release#commit-message-format) link for more information. A tool has been added to the project to make adhering to the standards easier.

```bash
# add source files
git add .

# format commit message
npm run commit

# push
git push -u origin master
```
