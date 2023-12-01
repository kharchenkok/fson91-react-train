import { useEffect, useState } from 'react';

import NewsSearchForm from './NewsSearchForm';
import APIfetchArticles from '../../api/fetchArticles';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchArticles = () => {
      setIsLoading(true);

      APIfetchArticles({ searchQuery, currentPage })
        .then((responseArticles) => {
          setArticles((prevArticles) => [...prevArticles, ...responseArticles]);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    fetchArticles();
  }, [currentPage, searchQuery]);

  const updatePage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  return (
    <div>
      {error && <h1>Ой ошибка, всё пропало!!!</h1>}

      <NewsSearchForm onSubmit={onChangeQuery} />

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {shouldRenderLoadMoreButton && (
        <button type="button" onClick={updatePage}>
          Загрузить ещё
        </button>
      )}

      {isLoading && (
        <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
          Загружаем...
          <span
            aria-label="Иконка"
            role="img"
            style={{ fontSize: 32, marginLeft: 10 }}
          >
            🧙‍♂️
          </span>
        </p>
      )}
    </div>
  );
}

// export default class News extends Component {
//   state = {
//     articles: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchArticles();
//     }
//   }

//   onChangeQuery = query => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       articles: [],
//       error: null,
//     });
//   };

// fetchArticles = () => {
//   const { currentPage, searchQuery } = this.state;
//   const options = { searchQuery, currentPage };

//   this.setState({ isLoading: true });

//   APIfetchArticles(options)
//     .then(articles => {
//       this.setState(prevState => ({
//         articles: [...prevState.articles, ...articles],
//         currentPage: prevState.currentPage + 1,
//       }));
//     })
//     .catch(error => this.setState({ error }))
//     .finally(() => this.setState({ isLoading: false }));
// };

//   render() {
//     const { articles, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

//     return (
// <div>
//   {error && <h1>Ой ошибка, всё пропало!!!</h1>}

//         <NewsSearchForm onSubmit={this.onChangeQuery} />

// <ul>
//   {articles.map(({ title, url }) => (
//     <li key={title}>
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         {title}
//       </a>
//     </li>
//   ))}
// </ul>

// {shouldRenderLoadMoreButton && (
//   <button type="button" onClick={this.fetchArticles}>
//     Загрузить ещё
//   </button>
// )}

// {isLoading && (
//   <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
//     Загружаем...
//     <span
//       aria-label="Иконка"
//       role="img"
//       style={{ fontSize: 32, marginLeft: 10 }}
//     >
//       🧙‍♂️
//     </span>
//   </p>
//         )}
//       </div>
//     );
//   }
// }
