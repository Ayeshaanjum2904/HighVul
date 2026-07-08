/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import axios from 'axios';

class LimitesAprovadosCadastroService {
  async insertTipoRelacionamento(tipoRelacionamento) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/tipo-relacionamento`, tipoRelacionamento);
    if (!response) {
      throw new Error('Falha ao inserir o tipo relacionamento!');
    }
    return response.data;
  }

  async insertTipoDocumento(tipoDocumento) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/tipo-documento`, tipoDocumento);
    if (!response) {
      throw new Error('Falha ao inserir o tipo documento!');
    }
    return response.data;
  }

  async insertPessoaDocumentacao(pessoaDocumentacao) {
    const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento`, pessoaDocumentacao);
    if (!response) {
      throw new Error('Falha ao inserir pessoa documentação!');
    }
    return response.data;
  }

  async getPessoaDocumentacao(idLimite) {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/${idLimite}`);
    if (!result) throw new Error('Não foi possível buscar a lista de pessoas cadastradas');
    if (result.status === 200) {
      return result.data;
    }
  }
  async getListTipoRelacionamento() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/tipo-relacionamento`);
    if (!result.data) throw new Error('Não foi possível buscar a lista de tipos relacionamento');
    if (result.status === 200) {
      return result.data;
    }
  }
  async getListTipoDocumento() {
    const result = await axios.get(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/tipo-documento`);
    if (!result.data) throw new Error('Não foi possível buscar a lista de tipos documento');
    if (result.status === 200) {
      return result.data;
    }
  }
  async deletePessoaDocumentacao(idPessoa) {
    const body = {
      data: {
        value: idPessoa,
      },
    };
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documentacao`, body);
    if (!response || response.status !== 200) {
      throw new Error('Falha ao deletar.');
    }
  }

  async deletePessoaDocumento(body) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao deletar documento.');
    }

    return response.data;
  }

  async updateDocumentoValidacao(idDocumento) {
    const body = {
      value: idDocumento,
    };
    const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/validacao`, body);
    if (!response || response.status !== 200) {
      throw new Error('Falha ao validar documento.');
    }

    return response;
  }

  async fecharStatusNotificacaoPorDocumentos(idDocumento) {
    const body = {
      value: idDocumento,
    };
    const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/fechar-status-notificacao`, body);
    if (!response || response.status !== 200) {
      throw new Error('Falha ao verificar os documentos e fechar o status da notificação.');
    }

    return response;
  }

  async updateDocumentoDesfazerValidacao(idDocumento) {
    const body = {
      value: idDocumento,
    };
    const response = await axios.patch(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/desfazer-validacao`, body);
    if (!response || response.status !== 200) {
      throw new Error('Falha ao desfazer a validação do documento.');
    }

    return response;
  }

  async getDocumentoPessoa(idDocumento) {
    const body = {
      value: idDocumento,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/documento/url`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao baixar documento.');
    }

    return response;
  }

  async getDocumentoPessoaCadastro(idDocumento) {
    const body = {
      value: idDocumento,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/documento-cadastro/url`, body);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao baixar documento.');
    }

    return response;
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

  async deleteTipoDocumento(id) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/tipo-documento/${id}`);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao deletar documento.');
    }

    return response.data;
  }

  async deleteTipoRelacionamento(id) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/tipo-relacionamento/${id}`);

    if (!response || response.status !== 200) {
      throw new Error('Falha ao deletar relacionamento.');
    }

    return response.data;
  }

  async updatePessoaDocumentacao(atualizacaoListaDocumento) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/documentos/pessoa-documento/atualizacao-lista-documento`, atualizacaoListaDocumento);
    if (!response) {
      throw new Error('Falha ao editar pessoa documentação!');
    }
    return response.data;
  }

  async updateAndSaveJustificativa(dados) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/formalizacao/gestao-limites/justificar-acao-aprovacao`, dados);
      return response;
    } catch (e) {
      throw new Error('Falha ao enviar para o financiamento rede!');
    }
  }
}

export default new LimitesAprovadosCadastroService();
