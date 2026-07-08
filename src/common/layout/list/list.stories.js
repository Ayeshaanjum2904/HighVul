/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { makeStyles } from '@material-ui/styles';

import { List, ListContent } from './list';
import { ListGroup } from './listGroup';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('List', () => (<ListStory />))
  .add('With groups', () => (<ListGroupStory />))
  .add('Loading and Error', () => (<ListLoadingAndErrorStory />));

const useStyles = makeStyles({
  header: {
    fontSize: '18px',
    padding: '0 24px',
  },

  explanation: {
    fontSize: '14px',
    padding: '8px 24px',

    '& pre': {
      padding: '8px',
      fontFamily: 'monospace',
      backgroundColor: 'lightgray',
      border: 'solid 1px black',
    },
  },

  content: {
    border: 'solid 1px black',
    height: '200px',
    width: '70%',
    resize: 'both',
    overflow: 'hidden',
  },

  listRow: {
    fontSize: '10px',
    padding: '8px',
    border: '1px gray solid',
    margin: '2px 2px',
    minWidth: '300px',
  },
});

const ListStory = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        {'<List />'}
      </div>
      <div className={classes.explanation}>
        <p>
          Implementa um componente de listagem para obter
          consistência de estilo e aumentar reutilização de código.
        </p>
        <p>
          Use o elemento
          {'<ListContent>'}
          para marcar o conteudo a ser mostrado pela lista
        </p>
      </div>
      <div className={classes.content}>
        <List>
          <ListContent>
            {(new Array(20).fill().map((_, i) => (
              <div className={classes.listRow}>
                {`Item ${i}`}
              </div>
            )))}
          </ListContent>
        </List>
      </div>
    </div>
  );
};

const ListGroupStory = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}> List with groups </div>
      <div className={classes.explanation}>
        Agrupamento de itens de listagem
      </div>
      <div className={classes.content}>
        <List>
          <ListContent>
            <ListGroup label="Group A">
              <div className={classes.listRow}>Group A, Item 1</div>
            </ListGroup>
            <ListGroup label="Empty Group" />
            <ListGroup label="Group B">
              <div className={classes.listRow}>Group B, Item 1</div>
              <div className={classes.listRow}>Group B, Item 2</div>
              <div className={classes.listRow}>Group B, Item 3</div>
              <div className={classes.listRow}>Group B, Item 4</div>
              <div className={classes.listRow}>Group B, Item 5</div>
              <div className={classes.listRow}>Group B, Item 6</div>
              <div className={classes.listRow}>Group B, Item 7</div>
              <div className={classes.listRow}>Group B, Item 8</div>
            </ListGroup>
          </ListContent>
        </List>
      </div>
    </div>
  );
};

const CheckBox = ({ label, value, setValue }) => (
  <div>
    <label htmlFor={`list-stories-cb-${label}`}>
      <input
        type="checkbox"
        id={`list-stories-cb-${label}`}
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
      />
      {label}
    </label>
  </div>
);

const ListLoadingAndErrorStory = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);

  return (
    <div>
      <div className={classes.header}> Exibindo conteúdo de loading, erro e empty </div>
      <div className={classes.explanation}>
        <div>
          <pre>
            Usar
            {' <ListContent type={/* tipo */} > '}
            para passar os conteudos de erro, loading e empty para a lista
            <br />
            <br />
            type pode ser &apos;error&apos;, &apos;empty&apos; ou &apos;loading&apos;
          </pre>
        </div>
        <div>
          <CheckBox label="empty" value={empty} setValue={setEmpty} />
          <CheckBox label="loading" value={loading} setValue={setLoading} />
          <CheckBox label="error" value={error} setValue={setError} />
        </div>
      </div>
      <div className={classes.content}>
        <List
          isLoading={loading}
          isError={error}
          isEmpty={empty}
        >
          <ListContent>
            <ListGroup label="Group A">
              <div className={classes.listRow}>Group A, Item 1</div>
              <div className={classes.listRow}>Group A, Item 2</div>
              <div className={classes.listRow}>Group A, Item 3</div>
              <div className={classes.listRow}>Group A, Item 4</div>
            </ListGroup>
          </ListContent>
          <ListContent type="empty">
            Custom Empty
          </ListContent>
          <ListContent type="loading">
            Custom Loading
          </ListContent>
          <ListContent type="error">
            Custom Error
          </ListContent>
        </List>
      </div>
    </div>
  );
};
