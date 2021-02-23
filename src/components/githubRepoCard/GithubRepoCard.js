import React from "react";
import "./GithubRepoCard.css";
import {Fade} from "react-reveal";

export default function GithubRepoCard({repo, isDark}) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
          key={repo.node.id}
          onClick={() => openRepoinNewTab(repo.node.url)}
        >
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="book"
              aria-hidden="true"
              className={`svg-inline--fa fa-book fa-w-14 octicon repo-svg ${isDark ? "repo-svg-dark" : "repo-svg-light"}`}
              viewBox="0 0 12 16"
              width="14"
              height="20"
              role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                ></path>
              </svg>
            <p className="repo-name">{repo.node.name}</p>
          </div>
          <p className="repo-description">{repo.node.description}</p>
          <div className="repo-stats">
            <div className="repo-left-stat">
              {repo.node.primaryLanguage !== null && (
                <span>
                  <div
                    className="language-color"
                    style={{backgroundColor: repo.node.primaryLanguage.color}}
                  ></div>
                  <p>{repo.node.primaryLanguage.name}</p>
                </span>
              )}
              <span>
                <svg
                  aria-hidden="true"
                  className="octicon repo-star-svg"
                  height="20"
                  role="img"
                  viewBox="0 0 10 16"
                  width="12"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  ></path>
                </svg>
                <p>{repo.node.forkCount}</p>
              </span>
              <span>
                <svg
                  aria-hidden="true"
                  className="octicon repo-star-svg"
                  height="20"
                  role="img"
                  viewBox="0 0 14 16"
                  width="14"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  ></path>
                </svg>
                <p>{repo.node.stargazers.totalCount}</p>
              </span>
            </div>
            <div className="repo-right-stat">
              <p>{repo.node.diskUsage} KB</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
