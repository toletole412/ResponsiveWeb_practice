import React, {PureComponent} from 'react';
import './Article.css';

export default class Article extends PureComponent {
  render() {
    return (
      <section>
        <header>
          <h1>Most important heading here</h1>
        </header>
        <nav>
          <a href="/AAAA/">AAAA</a> |
          <a href="/BBBB/">BBBB</a> |
          <a href="/CCCC/">CCCC</a> |
          <a href="/DDDD/">DDDD</a>
        </nav>
        <article>
          <header>
            <h2>Most important heading here</h2>
            <h3>less important heading</h3>
          </header>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </article>
        <footer>
          <p>Posted by: Yoonji Oh</p>
          <p>Contact information: <a href="mailto:someone@example.com">
          someone@example.com</a>.</p>
        </footer>
      </section>
    )
  }

}
