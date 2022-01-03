import * as bin from './index';
import packageJson from '../../../package.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'someone awesome for visiting my portfolio';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:itmike2018@gmail.com');

  return 'Opening mailto:itmike2018@gmail.com...';
};

export const banner = (args?: string[]): string => {
  return `

███╗   ███╗██╗██╗  ██╗███████╗         ██╗ ██████╗ ███╗   ██╗███████╗███████╗
████╗ ████║██║██║ ██╔╝██╔════╝         ██║██╔═══██╗████╗  ██║██╔════╝██╔════╝
██╔████╔██║██║█████╔╝ █████╗           ██║██║   ██║██╔██╗ ██║█████╗  ███████╗
██║╚██╔╝██║██║██╔═██╗ ██╔══╝      ██   ██║██║   ██║██║╚██╗██║██╔══╝  ╚════██║
██║ ╚═╝ ██║██║██║  ██╗███████╗    ╚█████╔╝╚██████╔╝██║ ╚████║███████╗███████║
╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝     ╚════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝ v${packageJson.version}

Type 'help' to see list of available commands.

`;
};
