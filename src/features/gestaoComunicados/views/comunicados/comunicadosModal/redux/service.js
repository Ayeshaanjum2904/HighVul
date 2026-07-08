/* eslint-disable class-methods-use-this */

import axios from 'axios';
import { formatDateForUrl } from 'utils/axios';

class ComunicadosService {
  async deleteFile(key) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/central-comunicados/delete`,
      { params: { idArquivo: key } },
    );
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar remover a url do Contrato!');
    }

    return response.data;
  }

  async getUrlUpload(key, fileType) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/central-comunicados/urlFile`,
      { params: { fileType, idArquivo: key } },
    );
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload do Arquivo!');
    }

    return response.data;
  }

  async insertDocumento(documento) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/central-comunicados/insert`,
      {
        fileURL: documento.urlFile,
        fileName: documento.fileName,
        dataEmissao: formatDateForUrl(documento.dataEmissao),
        idDocumento: documento.key,
        documentoTipo: documento.brands,
      },
    );
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload do Arquivo!');
    }

    return response.data;
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
      throw new Error('Falha ao tentar fazer upload do arquivo!');
    }

    return response.data;
  }

  async getBrand() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/central-comunicados/brand`);
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao buscar brand!');
    }
    return response.data.map((b) => ({ label: b.descricao, value: b.id }));
  }

  async excluiComunicado(key) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/central-comunicados/delete-comunicado/${key}`,
    );

    if (response.data !== true) {
      throw new Error('Falha ao deletar arquivo');
    }
  }

  async getSignedUrl(idDocumento) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/central-comunicados/url-file/download`,
      { params: { idDocumento } },
    );
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar obter a URL assinada do arquivo!');
    }
    return response.data.result;
  }
}
export default new ComunicadosService();
