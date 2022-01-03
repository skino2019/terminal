import React from 'react';
import Head from 'next/head';
import {Input} from '../components/input';
import {useHistory} from '../hooks/history';
import {History} from '../components/history';
import {NextPageContext} from 'next';
import packageJson from '../../package.json';
import {getQuote} from '../api';
import {banner} from '../utils/bin';

const IndexPage: React.FC<{ version: string; quote: string }> = ({
                                                                     version,
                                                                     quote,
                                                                 }) => {
    const inputRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const {history, command, setCommand, setHistory, clearHistory} = useHistory(
        [],
    );

    const init = React.useCallback(() => setHistory(banner()), []);

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [history]);

    return (
        <>
            <Head>
                <title>Mike Jones | Portfolio</title>
            </Head>
            <section className="p-10 h-full content-center">
                <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray text-sm font-mono subpixel-antialiased
              bg-light-background pb-6 pt-4 rounded-lg leading-normal overflow-y-auto h-full max-w-6xl mx-auto">
                    <div className="top mb-2 flex">
                        <div className="h-3 w-3 bg-light-red rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-light-orange rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-light-green rounded-full"></div>
                    </div>
                    <div className="mt-4 flex">
                        <div ref={containerRef} className="overflow-y-auto h-full">
                            <History history={history}/>
                            <Input
                                inputRef={inputRef}
                                containerRef={containerRef}
                                command={command}
                                history={history}
                                setCommand={setCommand}
                                setHistory={setHistory}
                                clearHistory={clearHistory}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getStaticProps(context: NextPageContext) {
    const {quote} = await getQuote();

    return {
        props: {
            version: packageJson.version,
            quote,
        },
        revalidate: true,
    };
}

export default IndexPage;
