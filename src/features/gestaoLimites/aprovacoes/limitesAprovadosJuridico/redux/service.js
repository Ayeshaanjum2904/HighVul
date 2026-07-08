/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import axios from 'axios';

class LimitesAprovadosJuridicoService {
  async getPessoaDocumentacao(idLimite) {
    const config = {
      value: idLimite,
    };
    const result = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/pessoa`, config);
    if (!result) throw new Error('Não foi possível buscar a lista de pessoas cadastradas');
    if (result.status === 200) {
      return result.data;
    }
  }

  async deletePessoaDocumentacao(idPessoaDocumentacao) {
    const config = {
      data: {
        value: idPessoaDocumentacao,
      },
    };
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/pessoa/documento`, config);
    if (!response || response.status !== 200) {
      throw new Error('Falha ao deletar.');
    }
  }

  async insertTipoDocumento(tipoDocumento) {
    const body = {
      tipo: tipoDocumento,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/tipo-documento`, body);
    if (!response) {
      throw new Error('Falha ao inserir o tipo documento!');
    }
    return response.data;
  }

  async getListTipoDocumento() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/tipo-documento`);
    if (response.status !== 200 || !response.data) {
      throw new Error('Não foi possível buscar a lista de tipos documento');
    }
    return response.data;
  }

  async insertPessoaDocumentacao(pessoaDocumentacao) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/pessoa/documento`, pessoaDocumentacao);
    if (!response) {
      throw new Error('Falha ao inserir pessoa documentação!');
    }
    return response.data;
  }

  async getUrlUploadTemp(file) {
    const body = {
      nomeOriginal: file?.name,
      tamanhoEmBytes: file?.size,
      type: file?.type,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/upload-temp`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao gerar URL de upload do arquivo');
    }

    return response;
  }

  async getUrlMultipleUploadsTemp(files) {
    const body = {
      anexos: files.map((file) => ({
        nomeOriginal: file?.name,
        tamanhoEmBytes: file?.size,
        type: file?.type,
      })),
    };

    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/upload-temp-async`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao gerar URL de upload do arquivo');
    }

    return response;
  }

  async uploadFile(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload do arquivo');
    }

    return response.status;
  }

  async insertTipoDocumentoFormalizar(tipoDocumento) {
    const body = {
      tipo: tipoDocumento,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/tipo-documento`, body);
    if (!response) {
      throw new Error('Falha ao inserir o tipo documento formalizar!');
    }
    return response.data;
  }

  async deleteTipoDocumentoFormalizar(idTipoDocumento) {
    const config = {
      data: {
        value: idTipoDocumento,
      },
    };
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/tipo-documento`, config);
    if (!response) {
      throw new Error('Falha ao excluir o tipo documento formalizar!');
    }
    return response.data;
  }

  async getTipoDocumentoFormalizar() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/tipo-documento`);
    if (response.status !== 200 || !response.data) {
      throw new Error('Não foi possível buscar a lista de tipos documento formalizar');
    }
    return response.data;
  }

  async getDocumentosFormalizar(idLimite) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/${idLimite}`);
    if (!response) throw new Error('Não foi possível buscar a lista de Documentos Formalizar');
    if (response.status === 200) {
      return response.data;
    }
  }

  async getAnexoDocumentoFormalizar(nomeGuid) {
    const body = {
      Value: nomeGuid,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/url`, body);
    if (response.status !== 200) {
      throw new Error('Falaha ao gerar a url de download do arquivo');
    }
    return response;
  }

  async insertDocumentosFormalizar(documentosFormalizar) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/`, documentosFormalizar);
    if (response.status !== 200) {
      throw new Error('Falha ao inserir documentos formalizar');
    }
    return response.data;
  }

  async updateDocumentosFormalizar(updateDocumentosFormalizar) {
    try {
      const response = await axios.put(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/`, updateDocumentosFormalizar);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data?.message);
      }
      throw new Error('Erro de conexão com o servidor');
    }
  }

  async deleteDocumentosFormalizar(idLimite) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/${idLimite}`);
    if (response.status !== 200) {
      throw new Error('Falha ao deletar documentos formalizar');
    }
    return response.status;
  }

  async invalidarDocumentoFormalizarDealer(body) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/anexo`, body);
    if (response.status !== 200) {
      throw new Error('Falha ao invalidar documento');
    }
    return response.status;
  }

  async validarDocumentoFormalizarDealer(idDocumento) {
    const config = {
      value: idDocumento,
    };
    const result = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/validar`, config);
    if (!result) throw new Error('Não foi possível buscar a lista de pessoas cadastradas');
    if (result.status === 200) {
      return result.data;
    }
  }

  async updateAndSaveStatus(dados) {
    try {
      const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/status`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao alterar status!');
    }
  }

  async getDocumentoJuridicoPessoa(idDocumento) {
    const body = {
      value: idDocumento,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/pessoa/documento-complementar/url`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao baixar documento.');
    }

    return response;
  }

  async updateDocumentoJuridicoValidacao(idDocumento, validar) {
    const body = {
      idArquivoDocumento: idDocumento,
      Validar: validar,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/pessoa/documento-complementar/validar`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao validar documento.');
    }

    return response;
  }

  async deleteDocumentoJuridico(dados) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/pessoa/documento-complementar`, dados);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao invalidar documento.');
    }

    return response;
  }

  async validarDocumentoFormalizarJuridico(idDocumento, validar) {
    const config = {
      IdDocumento: idDocumento,
      Validar: validar,
    };
    const result = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/documento-formalizar/validar`, config);
    if (!result) throw new Error('Não foi possível realizar a operação');
    if (result.status === 200) {
      return result.data;
    }
  }

  async getDadosEnvelopeDocusign(idDocusign) {
    const body = {
      Value: idDocusign,
    };
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-juridico/docusign/historico`, body);

      if (response.status === 204) {
        throw new Error(`O número de ID do envelope "${idDocusign}" não existe`);
      }
      return response.data;
    } catch {
      throw new Error('Falha ao buscar histórico de assinaturas.');
    }
  }
}

export default new LimitesAprovadosJuridicoService();
