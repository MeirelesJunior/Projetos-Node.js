import chalk from "chalk";


const promptQRcode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRcode"),
  },
  {
    name: "type",
    description: chalk.yellow("Selecione o tipo: (1- NORMAL ou 2- TERMINAL)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Solha apenas entre 1 e 2"),
    require: true,
  },
];

export default promptQRcode;
