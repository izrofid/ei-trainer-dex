import React from "react";

type EvIvBlockProps = {
  ev?: number[];
  iv?: number[];
};

const defaultEv = [0, 0, 0, 0, 0, 0];
const defaultIv = [0, 0, 0, 0, 0, 0];

const EvIvBlock: React.FC<EvIvBlockProps> = (EvIvBlockProps) => {

  const ev = EvIvBlockProps.ev || defaultEv;
  const iv = EvIvBlockProps.iv || defaultIv;

  return (
    <>
      <div className="bg-popover rounded-lg p-2">
        <div className="grid grid-cols-7 gap-2 text-sm mb-3">
          <span className="font-semibold bg-accent px-2 py-1 rounded text-center font-mono">
            EVs
          </span>
          <span className="dark:bg-red-800/40 bg-red-900 dark:text-red-400 text-red-200 px-2 py-1 rounded text-center font-mono">
            {ev[0]}
          </span>
          <span className="dark:bg-orange-800/40 bg-orange-900 dark:text-orange-400 text-orange-200 px-2 py-1 rounded text-center font-mono">
            {ev[1]}
          </span>
          <span className="dark:bg-yellow-800/40 bg-yellow-900 dark:text-yellow-400 text-yellow-200 px-2 py-1 rounded text-center font-mono">
            {ev[2]}
          </span>
          <span className="dark:bg-blue-800/40 bg-blue-900 dark:text-blue-400 text-blue-200 px-2 py-1 rounded text-center font-mono">
            {ev[3]}
          </span>
          <span className="dark:bg-green-800/40 bg-green-900 dark:text-green-400 text-green-200 px-2 py-1 rounded text-center font-mono">
            {ev[4]}
          </span>
          <span className="dark:bg-purple-800/40 bg-purple-900 dark:text-purple-400 text-purple-200 px-2 py-1 rounded text-center font-mono">
            {ev[5]}
          </span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-sm">
          <span className="font-semibold bg-accent px-2 py-1 rounded text-center font-mono">
            IVs
          </span>
          <span className="dark:bg-red-800/40 bg-red-900 dark:text-red-400 text-red-200 px-2 py-1 rounded text-center font-mono">
            {iv[0]}
          </span>
          <span className="dark:bg-orange-800/40 bg-orange-900 dark:text-orange-400 text-orange-200 px-2 py-1 rounded text-center font-mono">
            {iv[1]}
          </span>
          <span className="dark:bg-yellow-800/40 bg-yellow-900 dark:text-yellow-400 text-yellow-200 px-2 py-1 rounded text-center font-mono">
            {iv[2]}
          </span>
          <span className="dark:bg-blue-800/40 bg-blue-900 dark:text-blue-400 text-blue-200 px-2 py-1 rounded text-center font-mono">
            {iv[3]}
          </span>
          <span className="dark:bg-green-800/40 bg-green-900 dark:text-green-400 text-green-200 px-2 py-1 rounded text-center font-mono">
            {iv[4]}
          </span>
          <span className="dark:bg-purple-800/40 bg-purple-900 dark:text-purple-400 text-purple-200 px-2 py-1 rounded text-center font-mono">
            {iv[5]}
          </span>
        </div>
      </div>
    </>
  );
};

export default EvIvBlock;
