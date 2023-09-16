import React from 'react';
import { useFetchRss } from '../hooks/useFetchRss';

const RssFeed: React.FC = () => {
  const { articles, error } = useFetchRss();

  // エラーが発生した場合はエラーメッセージを表示
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // データがまだロードされていない場合は、ローディングメッセージを表示
  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {articles.map((article, index: React.Key) => (
        <li key={index}>
          <a href={article.link[0]} target="_blank" rel="noopener noreferrer">
            <h2>{article.title[0]}</h2>
            {/* 画像サムネイル */}
            {article['media:thumbnail'] && article['media:thumbnail'][0] && (
              <div>
                <img src={article['media:thumbnail'][0]} alt="" width="300" loading='lazy' />
              </div>
            )}
            {/*// 画像サムネイル */}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RssFeed;
