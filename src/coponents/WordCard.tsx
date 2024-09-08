import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export interface IWord {
  id?: string;
  pl: string;
  uk: string;
  serf: string;
  partOfSpeech: string;
}

interface WordCardProps {
  item: IWord;
  className?: string;
}

const WordCard: FunctionComponent<WordCardProps> = ({ item, className }) => {
  if (!item) return null;

  return (
    <div className={classNames(className, 'flex flex-col gap-3')}>
      <p className="text-3xl max-lg:text-2xl text-pink-400">{item.pl}</p>
      <p className="text-xl max-lg:text-lg text-gray-300">{item.uk}</p>
      {/* <p>Sertification: {item.serf}</p> */}
      {/* <p>Part of speach: {item.partOfSpeech}</p> */}
    </div>
  );
};

export default WordCard;
