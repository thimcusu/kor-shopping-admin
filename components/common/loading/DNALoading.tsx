import React from 'react';

// enum SizeEnum {
//   small = 'small',
//   medium ='medium',
//   large = 'large',
// }

type SizeLoadingEnum = 'small' | 'medium' | 'large';

export type DNALoadingProps = {
  size?: SizeLoadingEnum;
};

const DNALoading = (props: DNALoadingProps) => {
  const mapSizeLoading = {
    small: 1,
    medium: 2,
    large: 3,
  };
  const numberSize = mapSizeLoading[props.size] || 1;
  return (
    <div className={`dna-loader flex h-[72px] animate-[rotateDNA_10s_linear_infinite]`}>
      {[...Array(15)].map((x, i) => (
        <div
          key={`dna-i`}
          className={`dna-spike relative mx-[5px] h-full w-3 before:animate-[dnaChainBefore_1.5s_linear_infinite] after:animate-[dnaChainAfter_1.5s_linear_infinite] rounded-full before:absolute before:top-0 before:h-3 before:w-full before:rounded-full before:bg-blue-400 before:content-[''] after:absolute after:bottom-0 after:h-3 after:w-full after:rounded-full after:bg-[#4B6EF8] after:content-['']`}
        />
      ))}
    </div>
  );
};

export default DNALoading;
