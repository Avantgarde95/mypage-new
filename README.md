# mypage

My website!

## How to run

Must install

- [Node.js](https://nodejs.org/)
- [yarn (yarn classic)](https://classic.yarnpkg.com/en/docs/install)

Recommended to install

- [React devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [VSCode Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Set the environment variables

- Create ".env" file and set the following variables
  - BASE_PATH: Website's path under the domain (ex. On GitHub page, it's equal to the repository name)
- See the example (".env.example")

Install the dependencies

- Run `yarn`

Run in the development mode

- Run `yarn dev`
- Open <http://localhost:3000/[BASE_PATH]> on the browser

Generate the static website

- Run `yarn build`
- Run `yarn export`

Check the code

- Run `yarn lint`
- Run `yarn lint` to check & fix
