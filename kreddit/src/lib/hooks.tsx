import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import type { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useMarkdown = (str: string) => {

    const [result, setResult] = useState({} as JSX.Element);

    useEffect(() => {
        (async () => {
            const file = await remark()
                .use(remarkParse)
                .use(remarkHtml)
                .process(str);
            
            setResult(parse(String(file)) as JSX.Element);
        })();
    }, [str]);    

    return (
        <>
            {Boolean(Object.keys(result).length) ? result : <p>Loading...</p>}
        </>
    )
}