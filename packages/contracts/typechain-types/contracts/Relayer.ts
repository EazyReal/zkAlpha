/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export type ModelOutputStruct = {
  direction: BigNumberish;
  amount: BigNumberish;
};

export type ModelOutputStructOutput = [direction: bigint, amount: bigint] & {
  direction: bigint;
  amount: bigint;
};

export interface RelayerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FIELD_SIZE"
      | "TOKEN_A"
      | "TOKEN_B"
      | "ZERO_VALUE"
      | "deposit"
      | "depositVerifier"
      | "filledSubtrees"
      | "finalize"
      | "finalizeVerifier"
      | "genericExecutor"
      | "genericRouter"
      | "hashLeftRight"
      | "hasher"
      | "levels"
      | "modelInput"
      | "nextIndex"
      | "nodeStatusPool"
      | "root"
      | "swapVerifier"
      | "transact"
      | "transactionResults"
      | "uploadModel"
      | "withdraw"
      | "withdrawVerifier"
      | "zeros"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "UploadModel"): EventFragment;

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TOKEN_A", values?: undefined): string;
  encodeFunctionData(functionFragment: "TOKEN_B", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalize",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "genericExecutor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "genericRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "modelInput",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nodeStatusPool",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transact",
    values: [BytesLike, ModelOutputStruct, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transactionResults",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uploadModel",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BytesLike, BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN_A", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN_B", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalizeVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genericExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genericRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "modelInput", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nodeStatusPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transact", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transactionResults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uploadModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}

export namespace UploadModelEvent {
  export type InputTuple = [
    relayer: AddressLike,
    trader: AddressLike,
    vault: AddressLike,
    modelCommitment: BytesLike
  ];
  export type OutputTuple = [
    relayer: string,
    trader: string,
    vault: string,
    modelCommitment: string
  ];
  export interface OutputObject {
    relayer: string;
    trader: string;
    vault: string;
    modelCommitment: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Relayer extends BaseContract {
  connect(runner?: ContractRunner | null): Relayer;
  waitForDeployment(): Promise<this>;

  interface: RelayerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  FIELD_SIZE: TypedContractMethod<[], [bigint], "view">;

  TOKEN_A: TypedContractMethod<[], [string], "view">;

  TOKEN_B: TypedContractMethod<[], [string], "view">;

  ZERO_VALUE: TypedContractMethod<[], [bigint], "view">;

  deposit: TypedContractMethod<
    [
      _cNode: BytesLike,
      _balanceA: BigNumberish,
      _balanceB: BigNumberish,
      _vault: AddressLike,
      _proof: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  depositVerifier: TypedContractMethod<[], [string], "view">;

  filledSubtrees: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  finalize: TypedContractMethod<
    [_nullifier: BytesLike, _cNode2: BytesLike, _proof: BytesLike],
    [void],
    "nonpayable"
  >;

  finalizeVerifier: TypedContractMethod<[], [string], "view">;

  genericExecutor: TypedContractMethod<[], [string], "view">;

  genericRouter: TypedContractMethod<[], [string], "view">;

  hashLeftRight: TypedContractMethod<
    [_hasher: AddressLike, _left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;

  hasher: TypedContractMethod<[], [string], "view">;

  levels: TypedContractMethod<[], [bigint], "view">;

  modelInput: TypedContractMethod<[], [bigint], "view">;

  nextIndex: TypedContractMethod<[], [bigint], "view">;

  nodeStatusPool: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  root: TypedContractMethod<[], [string], "view">;

  swapVerifier: TypedContractMethod<[], [string], "view">;

  transact: TypedContractMethod<
    [
      _nullifier: BytesLike,
      modelOutput: ModelOutputStruct,
      _proof: BytesLike,
      _1inchV5Data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  transactionResults: TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, bigint, bigint] & {
        direction: bigint;
        amountA: bigint;
        amountB: bigint;
      }
    ],
    "view"
  >;

  uploadModel: TypedContractMethod<
    [_cModel: BytesLike],
    [string],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<
    [
      _nullifier: BytesLike,
      _balanceA: BigNumberish,
      _balanceB: BigNumberish,
      _vault: AddressLike,
      _proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  withdrawVerifier: TypedContractMethod<[], [string], "view">;

  zeros: TypedContractMethod<[i: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "FIELD_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "TOKEN_A"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "TOKEN_B"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ZERO_VALUE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [
      _cNode: BytesLike,
      _balanceA: BigNumberish,
      _balanceB: BigNumberish,
      _vault: AddressLike,
      _proof: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "filledSubtrees"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "finalize"
  ): TypedContractMethod<
    [_nullifier: BytesLike, _cNode2: BytesLike, _proof: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizeVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "genericExecutor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "genericRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "hashLeftRight"
  ): TypedContractMethod<
    [_hasher: AddressLike, _left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasher"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "levels"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "modelInput"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nodeStatusPool"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "root"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "swapVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transact"
  ): TypedContractMethod<
    [
      _nullifier: BytesLike,
      modelOutput: ModelOutputStruct,
      _proof: BytesLike,
      _1inchV5Data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transactionResults"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, bigint, bigint] & {
        direction: bigint;
        amountA: bigint;
        amountB: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "uploadModel"
  ): TypedContractMethod<[_cModel: BytesLike], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [
      _nullifier: BytesLike,
      _balanceA: BigNumberish,
      _balanceB: BigNumberish,
      _vault: AddressLike,
      _proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "zeros"
  ): TypedContractMethod<[i: BigNumberish], [string], "view">;

  getEvent(
    key: "UploadModel"
  ): TypedContractEvent<
    UploadModelEvent.InputTuple,
    UploadModelEvent.OutputTuple,
    UploadModelEvent.OutputObject
  >;

  filters: {
    "UploadModel(address,address,address,bytes32)": TypedContractEvent<
      UploadModelEvent.InputTuple,
      UploadModelEvent.OutputTuple,
      UploadModelEvent.OutputObject
    >;
    UploadModel: TypedContractEvent<
      UploadModelEvent.InputTuple,
      UploadModelEvent.OutputTuple,
      UploadModelEvent.OutputObject
    >;
  };
}
