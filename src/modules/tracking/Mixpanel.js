import { SHA256 } from 'crypto-js';
import mixpanel from 'mixpanel-browser';
import { AuthStorage } from '../auth/authStorage';
import { trackedEvents } from './trackedEvents';

const Mixpanel = {
  init: () => {
    mixpanel.init(window.env.REACT_APP_MIXPANEL_TOKEN || 'no_token');
    Mixpanel.identifyUser();
  },

  identifyUser: () => {
    const userId = AuthStorage.getCurrentUserId();
    const userEmail = AuthStorage.getCurrentUserEmail();
    const identity = { userId, userEmail: SHA256(userEmail).toString() };
    if (userId) {
      mixpanel.identify(userId);
      mixpanel.people.set(identity);
    }
  },

  trackPageNavigation: (path) => {
    mixpanel.track(trackedEvents.pageNavigation, { path });
  },

  trackBreadCrumb: (path) => {
    mixpanel.track(trackedEvents.breadcrumb, { path });
  },

  trackMenuClick: (target) => {
    mixpanel.track(trackedEvents.menuClick, { target });
  },

  trackButtonClick: (target, page) => {
    if (target) { mixpanel.track(trackedEvents.butttonClick, { page, target }); }
  },

  trackUploadFiles: (action) => {
    mixpanel.track(trackedEvents.uploadFile, { action });
  },

  trackPreviewFiles: (action) => {
    mixpanel.track(trackedEvents.previewFile, { action });
  },

  trackPageFilter: (page, type) => {
    mixpanel.track(trackedEvents.pageFilter, { page, type });
  },

  trackCommentary: (page) => {
    mixpanel.track(trackedEvents.commentary, { page });
  },

  trackSubmit: (action, error, errors = []) => {
    mixpanel.track(
      trackedEvents.submitForm,
      {
        action,
        result: error ? 'fail' : 'success',
        errors,
      },
    );
  },

  trackLoginAttempt: (email, error) => {
    mixpanel.track(
      trackedEvents.loginAttempt,
      {
        email: SHA256(email).toString(),
        result: error ? 'fail' : 'success',
      },
    );
  },

  trackLogoff: (email) => {
    mixpanel.track(trackedEvents.logoff, { email: SHA256(email).toString() });
  },

  trackOrdemValidacaoResultado: (totalLinhas, linhasCorretas, linhasComErro) => {
    mixpanel.track(trackedEvents.ordemValidacaoResultado, {
      total_linhas: totalLinhas,
      linhas_corretas: linhasCorretas,
      linhas_com_erro: linhasComErro,
    });
  },

  trackOrdemCriada: (temCartaMes, criacaoParcial, totalPedidos) => {
    mixpanel.track(trackedEvents.ordemCriada, {
      tem_carta_mes: temCartaMes,
      criacao_parcial: criacaoParcial,
      total_pedidos: totalPedidos,
    });
  },

};

export default Mixpanel;
