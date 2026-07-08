export const selectDictionary = {
  singular: 'documento',
  plural: 'documentos',
  type: 'o',
};

export const formDictionary = (editMode) => (editMode
  ? {
    action: 'Salvar alterações',
    secondaryAction: 'Descartar alterações',
    tipoEnvio: 'Selecione a opção de envio do arquivo',
    dialogText: 'As alterações feitas em “Documentos para formalizar” não foram salvas. Caso clique em descartar alterações as alterações serão apagadas.',
  } : {
    action: 'Salvar',
    secondaryAction: 'Limpar campos',
    tipoEnvio: 'Selecione uma ou mais opções',
    dialogText: 'As informações inseridas em “Documentos para formalizar” não foram salvas. Caso clique em limpar campos os dados serão apagados.',
  });

export const tipoEnvioDialogDictionary = (tipoEnvio) => {
  switch (tipoEnvio) {
    case 0:
      return 'Ao salvar as alterações o número do envelope do Docusign será excluído permanentemente.';
    case 1:
      return 'Ao salvar as alterações os anexos do dealer serão excluídos permanentemente.';
    case 2:
      return 'Ao salvar as alterações os anexos enviados pelo dealer e pelo jurídico serão excluídos permanentemente.';
    default:
      return '';
  }
};

export const dialogTipoEnvioDefault = {
  open: false,
  tipoEnvio: '',
  index: -1,
};
