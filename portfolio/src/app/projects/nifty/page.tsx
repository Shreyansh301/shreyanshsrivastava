import Head from 'next/head';
import Link from 'next/link';

const Nifty50StockAnalysis = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project - Nifty50 Stock Analysis</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6 font-semibold">Nifty50 Stock Analysis</p>
        <p className="text-lg mb-4">
          Analyzing the stock performance of Reliance Industries (RIL), HDFC Bank, and TCS over the past 10 years to understand their returns and growth trends.
        </p>

        <p className="font-medium text-xl mt-4">🚀 Features:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Stock analysis of RIL, HDFC Bank, and TCS</li>
          <li>Visualizations of daily and cumulative returns</li>
        </ul>

        <p className="font-medium text-xl mt-6">🔧 Tech Stack:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Pandas: Data manipulation</li>
          <li>yfinance: Stock price data fetching</li>
          <li>Matplotlib & Seaborn: Data visualization</li>
        </ul>

        <div className="mt-6">
          <a 
            href="https://github.com/Shreyansh301/Nifty50_StockAnalysis" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Check out the code on GitHub
          </a>
        </div>
      </div>

      <Link href="/portfolio" className="flex justify-center">
        &#8592; Back to Projects
      </Link>
    </div>
  );
};

export default Nifty50StockAnalysis;
