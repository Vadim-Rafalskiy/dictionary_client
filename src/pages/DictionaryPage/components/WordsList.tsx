import dictionary from '../../../dictionary/words_PL.json';
import WordCard, { IWord } from '../../../coponents/WordCard.tsx';

const WordsList = () => {
    return (
        <ul className="flex flex-wrap gap-3 ">
            {dictionary.words_PL.map((word: IWord, idx) => (
                <li
                    key={word.id}
                    className=" min-w-60 flex-1 border-solid bg-gray-800 border-gray-900 rounded p-4 text-center "
                >
                    <WordCard item={word} />
                </li>
            ))}
        </ul>
    );
};

export default WordsList;
