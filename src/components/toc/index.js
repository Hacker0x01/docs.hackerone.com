import React from "react";
import Slugger from "github-slugger";

import "./index.scss";

export default class ToC extends React.Component {
  slug(value) {
    return new Slugger().slug(value);
  }

  render() {
    const { headings } = this.props;

    return (
      <div className="toc">
        <div className="toc-wrapper">
          <div className="sidebar__body">
            <div className="sidebar__section">
              {headings && headings.length > 0 && (
                <React.Fragment>
                  <h3 className="sidebar__title sidebar__title--active">
                    On this page
                  </h3>

                  <ul className="sidebar__items sidebar__items--active">
                    {headings.map(header => (
                      <li key={header.value} className="sidebar__item">
                        <a href={`#${this.slug(header.value)}`}>
                          {header.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
