import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
    return repos.map((repo) => {
        return <RepoItem key={repo.id} repo={repo} />;
    });
};
Repos.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    repos: PropTypes.array.isRequired,
};
export default Repos;
