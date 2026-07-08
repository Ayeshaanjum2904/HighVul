import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import List, { ListContent } from 'common/layout/list';

import EmailsTemplateList from '../emailsTemplateList';
import EmailsConfiguracoesList from '../emailsConfiguracoesList';

import './emailsPageContent.scss';

const useStyles = makeStyles({
  container: {
    background: ({ isLoading, isError }) => (isLoading || isError ? 'white' : '#FAFBFD'),
  },
});

const EmailsPageContent = ({ isLoading, isError }) => {
  const classes = useStyles({ isLoading, isError });
  return (
    <div className={`emails__page-content__container ${classes.container}`}>
      <List
        isLoading={isLoading}
        isError={isError}
      >
        <ListContent>
          <EmailsTemplateList />
          <EmailsConfiguracoesList />
        </ListContent>

        <ListContent type="error">
          <div className="emails__page-content__message-container">
            Ocorreu um erro ao carregar as informações de emails.
          </div>
        </ListContent>
      </List>
    </div>
  );
};

EmailsPageContent.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

EmailsPageContent.defaultProps = {
  isLoading: false,
  isError: false,
};

export default EmailsPageContent;
