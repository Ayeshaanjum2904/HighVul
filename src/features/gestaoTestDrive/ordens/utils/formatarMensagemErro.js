const createValidationError = (message, details, status = 400) => {
  const error = new Error(message);
  error.name = 'ValidationError';
  error.details = details;
  error.status = status;
  return error;
};

const parseApiErros = (apiErrorResponse) => {
  if (!apiErrorResponse || !apiErrorResponse.errors) {
    return 'Erro desconhecido na validação dos dados.';
  }

  const listaErrosFormatados = [];
  const errorsObject = apiErrorResponse.errors;

  Object.keys(apiErrorResponse.errors).forEach((key) => {
    const mensagemErro = Array.isArray(errorsObject[key])
      ? errorsObject[key].join('\n ')
      : String(errorsObject[key]);

    const match = key.match(/^ExcelList\[(\d+)\]\.(.+)$/);

    if (match) {
      const linhaIndex = parseInt(match[1], 10);
      const userLinhaIndex = linhaIndex + 2;

      listaErrosFormatados.push(`Linha ${userLinhaIndex}: ${mensagemErro}`);
    } else {
      listaErrosFormatados.push(`Erro Geral no Campo "${key}": ${mensagemErro}`);
    }
  });

  if (listaErrosFormatados.length === 0) {
    return ['Não foi possível detalhar os erros de validação.'];
  }

  return listaErrosFormatados;
};

export const mensagemDeErroFormatada = (apiErrorResponse) => parseApiErros(apiErrorResponse);
export const erroFormatado = (message, details) => createValidationError(message, details);
