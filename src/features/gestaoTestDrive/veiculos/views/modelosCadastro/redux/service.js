/* eslint-disable class-methods-use-this */
import axios from 'axios';

class ModeloCadastroService {
  async sendModelo(modelo) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/modelos`,
      modelo,
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar inserir um novo Modelo');
    }

    return response.data;
  }

  async updateModelo(modelo) {
    const response = await axios.put(
      `${window.env.REACT_APP_API_URL}/modelos/${modelo.id}`,
      modelo,
    );

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar atualizar o Modelo: ${modelo.id}`);
    }

    return response.data;
  }

  async deleteModelo(idModelo) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/modelos/${idModelo}`);

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao deletar o modelo: ${idModelo}`);
    }

    return response.data;
  }

  async deleteUrlImagemModelo(idModelo) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/modelos/urlModelo`,
      { params: { idModelo } },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar remover a url do Modelo!');
    }

    return response.data;
  }

  async getUrlUploadImagemModelo(fileType, fileName, idModelo = null) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/modelos/urlModelo`,
      { params: { idModelo, fileType, fileName } },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload do Modelo!');
    }

    return response.data;
  }

  async uploadImagemModelo(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload da imagem no S3 Bucket');
    }

    return response.data;
  }
}

export default new ModeloCadastroService();
