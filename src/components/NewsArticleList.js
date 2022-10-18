import React from 'react'

const NewsArticleList = ({newsArticles, handleSelectChange}) => {

    const handleChange = (event) => {
      const index = event.target.value;
      handleSelectChange(newsArticles[index]);
    };

    const articleOptions = newsArticles.map((article, index) => {
      return <option key={index} value={index} > {article} </option>
    });

  return (
    <select onChange={handleChange}> {articleOptions.title} </select>
  )
}

export default NewsArticleList;