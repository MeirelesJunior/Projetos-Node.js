import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("passoword"));
  const passoword = await handle()
  console.log(passoword)
}

export default createPassword;
