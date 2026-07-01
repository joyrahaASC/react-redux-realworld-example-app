import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

class ArticlePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      pending: false
    };
  }

  handleClick = ev => {
    ev.preventDefault();

    const { article } = this.props;

    if (this.state.pending) {
      return;
    }

    this.setState({ error: null, pending: true });

    const action = article.favorited ?
      this.props.unfavorite(article.slug) :
      this.props.favorite(article.slug);

    return Promise.resolve(action)
      .then(() => {
        this.setState({ pending: false, error: null });
      })
      .catch(error => {
        let errorMessage = 'Unable to update favorite. Please try again.';

        if (error && error.response && error.response.body && error.response.body.errors) {
          const errors = error.response.body.errors;
          errorMessage = Object.keys(errors)
            .map(key => `${key} ${errors[key].join(', ')}`)
            .join(', ');
        } else if (error && error.message) {
          errorMessage = error.message;
        }

        this.setState({
          pending: false,
          error: errorMessage
        });
      });
  };

  render() {
    const article = this.props.article;
    const favoriteButtonClass = article.favorited ?
      FAVORITED_CLASS :
      NOT_FAVORITED_CLASS;

    return (
      <div className="article-preview">
        <div className="article-meta">
          <Link to={`/@${article.author.username}`}>
            <img src={article.author.image} alt={article.author.username} />
          </Link>

          <div className="info">
            <Link className="author" to={`/@${article.author.username}`}>
              {article.author.username}
            </Link>
            <span className="date">
              {new Date(article.createdAt).toDateString()}
            </span>
          </div>

          <div className="pull-xs-right">
            <button
              className={favoriteButtonClass}
              onClick={this.handleClick}
              disabled={this.state.pending}>
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
        </div>

        {this.state.error ? (
          <div className="article-preview-error">
            {this.state.error}
          </div>
        ) : null}

        <Link to={`/article/${article.slug}`} className="preview-link">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {
              article.tagList.map(tag => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                )
              })
            }
          </ul>
        </Link>
      </div>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);