import { createSelector } from 'reselect';
import _ from 'lodash';

const disabledNext = createSelector(
  (state) => state.emails.modal.template,
  (template) => (_.isNull(template.assuntoEmail) || _.isEmpty(template.assuntoEmail)
|| _.isNull(template.corpoEmail) || template.corpoEmail === '<p><br></p>'),
);

export default {
  disabledNext,
};
