// var React = require('react');
import React from 'react';
// import React, { PropTypes } from 'react'; //ES6.
// var PropTypes = require('prop-types'); //ES5
import PropTypes from 'prop-types';
// var api = require('../utils/api');
import api from "../utils/api";

function SelectProjects ({selectedProjects, onSelect}) {
  const topic = ['all', 'cisco', 'aci', 'sdn', 'juniper', 'arista'];

  return (
    <ul className='topic'>
      {topic.map(proj => (
          <li key={proj} style={proj === props.selectedProjects ? {color: '#d0021b'} : null}
              onClick={() => onSelect(proj)} >{proj}
          </li>
      ))}
    </ul>
  )
}

SelectProjects.proTypes = {
  selectedProject: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

function RepoGrid(props) {
  return(
    // <ul className='project-list'>
    //   {props.repos.map(function(repo, index) {
    //     return (
    //       <li key={repo.name} className='project-item'>
    //         <div className='project-rank'>#{index + 1}</div>
    //         <ul className='space-list-items'>
    //           <li>
    //             <img className='avatar' src={repo.owner.avatar_url}
    //               alt={'Avatar for ' + repo.owner.login} />
    //           </li>
    //           <li>
    //             <a href={repo.html_url}>{repo.name} </a>
    //           </li>
    //           <li>@{repo.owner.login}</li>
    //           <li>{repo.stargazers_count} stars </li>
    //         </ul>
    //       </li>
    //     )
    //   })}
    // </ul>
    <ul className='project-list'>
      {repos.map(({name, owner, html_url, stargazers_count}, index) => (
        <li key={name} className='project-item'>
          <div className='project-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={owner.avatar_url}
                alt={`Avatar for ${owner.login}`}
              />
            </li>
            <li><a href={html_url}>{name}</a></li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} starts</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}

RepoGrid.proTypes = {
  repos: React.ProTypes.array.isRequired,
}

class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedProjects: 'all',
      repos: null
    };

//     this.selectedProject = this.selectedProject.bind(this);
//   }

//   componentDidMount () {
//     api.fetchTopicRepos(this.state.selectedProject)
//       .then(function (repos) {
//         console.log(repos)
//       })
//   }

//   selectedProject(proj) {
//     this.setState(function () {
//       return {
//         selectedProject: proj,
//         repos: null
//       }
//     });

//     api.fetchTopicRepos(this.state.selectedProject)
//       .then(function (repos) {
//         console.log(repos)
//       }.bind(this));
//   }

//   render() {
//     return (
//       <div>
//         <SelectProjects
//           selectedProject = {this.state.selectedProject}
//           onSelect = {this}
//         />
//         {JSON.stringify(this.state.repos, null, 2)}
//       </div>
//       )
//     }
// }

// class Projects extends React.Component {
//   state = {
//     selectedProject: 'all',
//     repos: null
// };

  componentDidMount() {
      this.updateProject(this.state.selectedProject)
  }

  updateProject = async (lang) => {
    this.setState(() => ({selectedProject: lang}));
    const repos = await api.fetchPopularRepos(lang);
    this.setState(() => ({repos}))
  };

  render() {
    const {selectedProject, repos} = this.state;
    return (
      <div>
        <SelectProjects
          selectedProject={selectedProject}
          onSelect={this.updateProject}/>
        // {!repos
        //   ? <Loading/>
        //   : <RepoGrid repos={repos}/>}
        {JSON.stringify(this.state.repos, null, 2)}
      </div>
    )
  }
}

export default Projects;