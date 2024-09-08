import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_GPT_KEY;
const apiKey_2 = import.meta.env.VITE_GPT_KEY_2;

const openai = new OpenAI({
    apiKey: apiKey_2,
    dangerouslyAllowBrowser: true,
});

const generateArticle = async (input: string) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: input }],
        model: 'gpt-4o-mini',
    });

    const answer = completion.choices[0];
    // const answer = completion.choices[0].message.content;
    return answer;
};

export default generateArticle;

// async function gptFunk() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
//         model: 'gpt-4o-mini',
//     });

//     console.log(completion.choices[0]);
// }

// export default gptFunk;
