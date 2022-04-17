import React from 'react';
import { FiDollarSign } from 'react-icons/fi';

enum CheckReduceIncrease {
  REDUCE,
  INCREASE,
  EQUAL,
}

type Props = {
  Icon: any;
  name: string;
  checkReduceIncrease: CheckReduceIncrease;
  value: number;
  price: number;
  DolaSign: boolean;
};

const Transaction = ({ DolaSign, Icon, name, checkReduceIncrease, value, price }: Props) => {
  return (
    <div className="flex w-1/3 items-start justify-start rounded-[10px] bg-[#E5E7F4] py-[16px] pl-[16px]">
      <div className="mr-[20px] inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
        <Icon className="font-bold text-accent" />
      </div>
      <div>
        <p className="mb-5 leading-[22px] text-[#949DAF]">{name}</p>
        <h2 className="mb-5  flex items-center text-[45px] font-bold leading-[56px]">
          {DolaSign && <FiDollarSign className="ml-[-9px]" />}
          {value}
        </h2>
        <p className="flex items-center text-[#6DCD9F]">
          {checkReduceIncrease === CheckReduceIncrease.INCREASE && (
            <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-b-[10px] border-solid border-[#6DCD9F] border-r-transparent border-l-transparent"></div>
          )}
          {checkReduceIncrease === CheckReduceIncrease.REDUCE && (
            <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[10px] border-solid border-red-600 border-r-transparent border-l-transparent"></div>
          )}
          {checkReduceIncrease === CheckReduceIncrease.EQUAL && (
            <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[15px] border-solid border-red-600 border-r-transparent border-l-transparent"></div>
          )}
          <span className="ml-[10px] ">{price + '%'}</span>
        </p>
      </div>
    </div>
  );
};

export default Transaction;
