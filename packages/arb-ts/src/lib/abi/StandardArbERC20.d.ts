/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface StandardArbERC20Interface extends ethers.utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'bridge()': FunctionFragment
    'bridgeMint(address,uint256,bytes)': FunctionFragment
    'decimals()': FunctionFragment
    'decreaseAllowance(address,uint256)': FunctionFragment
    'increaseAllowance(address,uint256)': FunctionFragment
    'initialize(address,address,uint8)': FunctionFragment
    'isMaster()': FunctionFragment
    'l1Address()': FunctionFragment
    'migrate(uint256,address,bytes)': FunctionFragment
    'name()': FunctionFragment
    'symbol()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'updateInfo(string,string)': FunctionFragment
    'withdraw(address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'bridge', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'bridgeMint',
    values: [string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(functionFragment: 'l1Address', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'migrate',
    values: [BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'updateInfo',
    values: [string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [string, BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'bridge', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'bridgeMint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l1Address', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'updateInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class StandardArbERC20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: StandardArbERC20Interface

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    bridge(overrides?: CallOverrides): Promise<[string]>

    'bridge()'(overrides?: CallOverrides): Promise<[string]>

    bridgeMint(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'bridgeMint(address,uint256,bytes)'(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    decimals(overrides?: CallOverrides): Promise<[number]>

    'decimals()'(overrides?: CallOverrides): Promise<[number]>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    initialize(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    'isMaster()'(overrides?: CallOverrides): Promise<[boolean]>

    l1Address(overrides?: CallOverrides): Promise<[string]>

    'l1Address()'(overrides?: CallOverrides): Promise<[string]>

    migrate(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'migrate(uint256,address,bytes)'(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    name(overrides?: CallOverrides): Promise<[string]>

    'name()'(overrides?: CallOverrides): Promise<[string]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    'symbol()'(overrides?: CallOverrides): Promise<[string]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'withdraw(address,uint256)'(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  'allowance(address,address)'(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'approve(address,uint256)'(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

  'balanceOf(address)'(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  bridge(overrides?: CallOverrides): Promise<string>

  'bridge()'(overrides?: CallOverrides): Promise<string>

  bridgeMint(
    account: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'bridgeMint(address,uint256,bytes)'(
    account: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  decimals(overrides?: CallOverrides): Promise<number>

  'decimals()'(overrides?: CallOverrides): Promise<number>

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'decreaseAllowance(address,uint256)'(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'increaseAllowance(address,uint256)'(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  initialize(
    _bridge: string,
    _l1Address: string,
    decimals_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address,uint8)'(
    _bridge: string,
    _l1Address: string,
    decimals_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  'isMaster()'(overrides?: CallOverrides): Promise<boolean>

  l1Address(overrides?: CallOverrides): Promise<string>

  'l1Address()'(overrides?: CallOverrides): Promise<string>

  migrate(
    amount: BigNumberish,
    target: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'migrate(uint256,address,bytes)'(
    amount: BigNumberish,
    target: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  'name()'(overrides?: CallOverrides): Promise<string>

  symbol(overrides?: CallOverrides): Promise<string>

  'symbol()'(overrides?: CallOverrides): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'transfer(address,uint256)'(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'transferFrom(address,address,uint256)'(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  updateInfo(
    newName: string,
    newSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateInfo(string,string)'(
    newName: string,
    newSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  withdraw(
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'withdraw(address,uint256)'(
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    bridge(overrides?: CallOverrides): Promise<string>

    'bridge()'(overrides?: CallOverrides): Promise<string>

    bridgeMint(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'bridgeMint(address,uint256,bytes)'(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    decimals(overrides?: CallOverrides): Promise<number>

    'decimals()'(overrides?: CallOverrides): Promise<number>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    initialize(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    'isMaster()'(overrides?: CallOverrides): Promise<boolean>

    l1Address(overrides?: CallOverrides): Promise<string>

    'l1Address()'(overrides?: CallOverrides): Promise<string>

    migrate(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'migrate(uint256,address,bytes)'(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    name(overrides?: CallOverrides): Promise<string>

    'name()'(overrides?: CallOverrides): Promise<string>

    symbol(overrides?: CallOverrides): Promise<string>

    'symbol()'(overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'withdraw(address,uint256)'(
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter

    Transfer(from: string | null, to: string | null, value: null): EventFilter
  }

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    bridge(overrides?: CallOverrides): Promise<BigNumber>

    'bridge()'(overrides?: CallOverrides): Promise<BigNumber>

    bridgeMint(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'bridgeMint(address,uint256,bytes)'(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    'decimals()'(overrides?: CallOverrides): Promise<BigNumber>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    initialize(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    'isMaster()'(overrides?: CallOverrides): Promise<BigNumber>

    l1Address(overrides?: CallOverrides): Promise<BigNumber>

    'l1Address()'(overrides?: CallOverrides): Promise<BigNumber>

    migrate(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'migrate(uint256,address,bytes)'(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    'name()'(overrides?: CallOverrides): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    'symbol()'(overrides?: CallOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'withdraw(address,uint256)'(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'allowance(address,address)'(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'bridge()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    bridgeMint(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'bridgeMint(address,uint256,bytes)'(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'decimals()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'decreaseAllowance(address,uint256)'(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'increaseAllowance(address,uint256)'(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    initialize(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      decimals_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isMaster()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l1Address(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l1Address()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    migrate(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'migrate(uint256,address,bytes)'(
      amount: BigNumberish,
      target: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'name()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'symbol()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'transferFrom(address,address,uint256)'(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    withdraw(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'withdraw(address,uint256)'(
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
