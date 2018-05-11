import React, {PureComponent} from 'react';
import './Article.scss';

export default class Article extends PureComponent {
  render() {
    return (
      <body>
        <header>
          <h1>Most important heading here</h1>
        </header>
        <nav>
          <a href="/AAAA/" target="_blank">AAAA</a>
          <a href="/BBBB/" target="_blank">BBBB</a>
          <a href="/CCCC/" target="_blank">CCCC</a>
          <a href="/DDDD/" target="_blank">DDDD</a>
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
        <aside>
          <h4>side content</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </aside>
        <footer>
          <p>Posted by: Yoonji Oh</p>
          <p>Contact information: <a href="mailto:someone@example.com">
          someone@example.com</a>.</p>
        </footer>
      </body>
    )
  }

}
