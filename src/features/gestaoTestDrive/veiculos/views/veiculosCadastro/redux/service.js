/* eslint-disable class-methods-use-this */
import axios from 'axios';

import { camelFormat } from 'utils/format';

class VeiculoCadastroService {
  async sendVeiculo(veiculo) {
    const response = await axios.post(
      `${window.env.REACT_APP_API_URL}/veiculos`,
      veiculo,
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar inserir um novo Veículo');
    }

    return response.data;
  }

  async updateVeiculo(veiculo) {
    const response = await axios.put(
      `${window.env.REACT_APP_API_URL}/veiculos/${veiculo.id}`,
      veiculo,
    );

    if (!response.data || response.status !== 200) {
      throw new Error(`Falha ao tentar atualizar o Veículo: ${veiculo.id}`);
    }

    return response.data;
  }

  async deleteUrlImagemVeiculo(idVeiculo) {
    const response = await axios.delete(
      `${window.env.REACT_APP_API_URL}/veiculos/urlVeiculo`,
      { params: { idVeiculo } },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar remover a url do Veículo!');
    }

    return response.data;
  }

  async getUrlUploadImagemVeiculo(fileType, fileName, idVeiculo = null) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/veiculos/urlVeiculo`,
      { params: { idVeiculo, fileType, fileName } },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload do Veículo!');
    }

    return response.data;
  }

  async uploadImagemVeiculo(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload da imagem do veículo no S3 Bucket');
    }

    return response.data;
  }

  async getBrands() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/modelos/marcas`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de marcas!');
    }
    return response.data.map((d) => ({
      text: camelFormat(d),
      value: camelFormat(d),
    }));
  }

  async getModelos(marca) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/modelos`,
      { params: { marca } },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de modelos');
    }
    return response.data;
  }

  async getUrlVeiculosList(marca) {
    const response = await axios.get(
      `${window.env.REACT_APP_API_URL}/veiculos/urlVeiculo/list`,
      { params: { marca } },
    );

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a lista de imagens dos veículos!');
    }
    return response.data;
  }
}

export default new VeiculoCadastroService();
