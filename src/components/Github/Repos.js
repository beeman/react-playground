import React from 'react'

const Repos = ({repos}) => (
  <div>
    <h3>User Repos</h3>
    <ul className="list-group">
      { repos.map((repo, index) => (
          <li className="list-group-item" key={index}>
            {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
            {repo.description && <p>{repo.description}</p>}
          </li>
        )
      )}
    </ul>
  </div>
)

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired,
}

export default Repos
