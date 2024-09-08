import React, { useEffect, useState } from 'react';
import generateArticle from '../api/gptApi';

const HomePage: React.FC = () => {
    const [words, setWords] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [article, setArticle] = useState<string>('');

    useEffect(() => {
        generateArticle(input)
            .then((response) => console.log(response))
            // .then((response) => setArticle(response))
            .catch((error) => console.error('Error:', error));
    }, [input]);

    const textParse = (str: string) => {
        const forbiddenWords = new Set([
            'w',
            'o',
            'i',
            'z',
            'ma',
            'że',
            'jej',
            'lub',
            'jak',
            'jest',
            'są',
            'to',
            'do',
            'co',
            'na',
            'się',
            'oraz',
        ]);

        function removePunctuation(str: string) {
            // Регулярний вираз для видалення всіх розділових знаків
            return str.replace(/[.,\n\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ');
        }

        const wordsArray = removePunctuation(str)
            .toLowerCase()
            .split(' ')
            .filter((word) => word !== '' && !forbiddenWords.has(word));

        setWords(wordsArray);
        console.log(wordsArray);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            text: HTMLTextAreaElement;
        };
        // textParse(target.text.value);
        setInput(target.text.value);
    };

    const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
        const target = e.target as HTMLFormElement;
        target.reset();
    };

    return (
        <section className="container p-5 mr-3">
            <h1 className="text-3xl font-bold underline text-center p-3 text-gray-300">
                My dictionary
            </h1>
            <div className="mx-auto w-7/12 ">
                <form
                    onReset={handleReset}
                    onSubmit={handleSubmit}
                    id="textForm"
                >
                    <textarea
                        form="textForm"
                        name="text"
                        wrap="soft"
                        className="w-full min-h-72 border-2 border-solid border-gray-600 rounded-sm   my-3 p-3"
                    ></textarea>

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-2/5"
                        >
                            Submit
                        </button>
                        <button
                            type="reset"
                            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-2/5"
                        >
                            Reset
                        </button>
                    </div>
                    <p className="text-gray-300">{article}</p>
                    {/* <p className='text-gray-300'>{words.sort().join(', ')}</p> */}
                </form>
            </div>
        </section>
    );
};

export default HomePage;
