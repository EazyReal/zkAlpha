/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICreate3Deployer,
  ICreate3DeployerInterface,
} from "../../../contracts/interfaces/ICreate3Deployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "addressOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "code",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICreate3Deployer__factory {
  static readonly abi = _abi;
  static createInterface(): ICreate3DeployerInterface {
    return new Interface(_abi) as ICreate3DeployerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICreate3Deployer {
    return new Contract(address, _abi, runner) as unknown as ICreate3Deployer;
  }
}
