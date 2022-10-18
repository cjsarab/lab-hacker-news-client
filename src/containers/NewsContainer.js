import React, {useState, useEffect} from 'react'
import NewsArticleList from '../components/NewsArticleList';

const NewsContainer = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then (res => res.json())
      .then ((data) => {
        
        const promises = data.map((article) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${article}.json`)
        .then(res => res.json())
      });

        Promise.all(promises)
        .then((data) => {
        setNewsArticles(data);
        
        });
      })
    }, []);



    

    // useEffect(() => {
    //     fetch("https://hacker-news.firebaseio.com/v0/item/{storyId}.json")
    //     .then (res => res.json())
    //     .then (selectedArticle => setSelectedArticle(selectedArticle))
    //   }, [])

    //   const setStoryId = (selectedArticle) => {
    //     storyId = selectedArticle
    //   }

    const handleSelectChange = (article) => {  
        setSelectedArticle(article);
    }

  return (
    <>
    <div>NewsContainer</div>
    <NewsArticleList newsArticles={newsArticles} handleSelectChange={handleSelectChange}/>
    </>
  )
}

export default NewsContainer;