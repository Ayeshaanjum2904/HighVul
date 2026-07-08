import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import MenuItem from 'common/controls/menuItem';
import LimiteIcon from 'assets/icons/limite';
import LimiteAprovadoIcon from 'assets/icons/limite-aprovado';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_GESTAO_LIMITES } from 'routes/paths';

const permsListarLimite = [
  permissions.limite.listarAnaliseCredito,
  permissions.limite.listarComercial,
  permissions.limite.listarTodos,
];

const permsListarLimiteAprovado = [
  permissions.limitesAprovados.gestaoFinanciamentoRede,
  permissions.limitesAprovados.gestaoCadastro,
  permissions.limitesAprovados.gestaoJuridico,
  permissions.limitesAprovados.gestaoCredito,
];

const useStyles = makeStyles({
  containerHeader: {
    display: 'flex',
    margin: '0 24px',
    padding: '17px 0 14px 0',
    alignItems: 'center',
    borderBottom: '1px solid #e4e9f2',
    color: '#555770',
  },
  text: {
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    color: '#555770',
    '& > svg': {
      width: '24px',
      height: '24px',
    },
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F9FAFC',
  },
  content: {
    paddingTop: '14px',
  },
  item: {
    padding: '2px 7px',
  },
});

const MenuGestaoLimites = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.containerHeader}>
        <Box className={classes.icon}>
          <LimiteIcon />
        </Box>
        <Box className={classes.text}>
          Gestão de limites
        </Box>
      </Box>
      <Box className={classes.content}>
        <RenderIfPermission requireAny={permsListarLimite}>
          <Box className={classes.item}>
            <MenuItem
              Icon={LimiteIcon}
              title="Alterações de limite"
              isActive={!!useRouteMatch(`${PATH_GESTAO_LIMITES}/acompanhamento`)}
              onClick={() => navTo('acompanhamento')}
            />
          </Box>
        </RenderIfPermission>
        <RenderIfPermission requireAny={permsListarLimiteAprovado}>
          <Box className={classes.item}>
            <MenuItem
              Icon={LimiteAprovadoIcon}
              title="Limites aprovados"
              isActive={!!useRouteMatch(`${PATH_GESTAO_LIMITES}/aprovacoes`)}
              onClick={() => navTo('aprovacoes/limites-aprovados')}
            />
          </Box>
        </RenderIfPermission>
      </Box>
    </Box>
  );
};

export default MenuGestaoLimites;
