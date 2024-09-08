import dictionary from '../../dictionary/words_PL.json';
import { nanoid } from 'nanoid';
import { Link, Outlet } from 'react-router-dom';
import DictionaryMenuItem from './components/DictionaryMenuItem';

const WordsPage: React.FC = () => {
    const wordsCount = dictionary.words_PL.length;
    return (
        <section className="max-w-7xl mx-auto p-5  bg-gray-500 rounded-md">
            <div className="grid grid-cols-7 gap-3">
                <div className="flex flex-col col-span-2  min-w-fit max-sm:hidden">
                    <DictionaryMenuItem
                        path="words"
                        name="Слова"
                        count={wordsCount}
                    />
                </div>

                <div className="col-span-5 max-sm:col-span-full">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default WordsPage;
