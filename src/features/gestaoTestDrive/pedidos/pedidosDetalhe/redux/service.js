/* eslint-disable class-methods-use-this */

import axios from 'axios';
import _ from 'lodash';

class PedidosDetalheService {
  async getDetalhePedido(pedidoId) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha na busca dos detalhes!');
    }

    if (_.isArray(response?.data?.comentarios)) {
      response.data.comentarios.forEach((p) => {
        // eslint-disable-next-line no-param-reassign
        p.data = new Date(p.data);
      });
    }

    return response.data;
  }

  async sendDetalhePedido(detalhePedido) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/pedidos/${detalhePedido?.pedidoId}`, detalhePedido);
    return response.data;
  }

  async updateStatusPedido(pedidoId, updateStatusDto) {
    try {
      const response = await axios.put(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/status`, updateStatusDto);
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }

      throw e;
    }
  }

  async cancelPedido(pedidoId, currentStatus, isAVista, motivoCancelamento) {
    const cancelPedidoDto = {
      currentStatus,
      isAVista,
      motivoCancelamento,
    };

    const response = await axios.put(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/cancel`, cancelPedidoDto);

    return response.data;
  }

  async getUrlUploadFaturaPedido(pedidoId, file) {
    const fileBody = {
      fileType: file.type,
      fileName: file.name,
      fileSize: file.size,
    };
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/urlFatura`, fileBody);
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload da fatura!');
    }

    return response.data;
  }

  async uploadFaturaPedido(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload da fatura!');
    }

    return response.data;
  }

  async deleteFaturaPedido(pedidoId) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/urlFatura`);
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar deletar arquivo de fatura!');
    }

    return response.data;
  }

  async getUrlDownloadFaturaPedido(pedidoId) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/urlFatura/download`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de download da fatura!');
    }

    return response.data;
  }

  async setPedidoVisualizado(pedidoId) {
    const response = await axios.put(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/visualizado`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao atualizar o campo de visualizado do pedido!');
    }

    return response.data;
  }

  async sendComentario(pedidoId, conteudo) {
    const response = await axios.post(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/comentarios`, { conteudo });
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar enviar um novo comentario!');
    }

    return response.data;
  }

  async deleteContrato(pedidoId) {
    const response = await axios.delete(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/urlContrato`);
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar remover a url do Contrato!');
    }

    return response.data;
  }

  async getUrlUploadContrato(pedidoId, fileType) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/urlContrato`, { params: { fileType } });
    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de upload do Contrato!');
    }

    return response.data;
  }

  async getUrlDownloadContrato(pedidoId) {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/urlContrato/download`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha ao tentar buscar a url de download do Contrato!');
    }

    return response.data;
  }

  async uploadContrato(urlUpload, file) {
    const instance = axios.create();
    const response = await instance.put(urlUpload, file, {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachment; filename=${file.name};`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Falha ao tentar fazer upload do Contrato!');
    }

    return response.data;
  }

  async resetStatusPedido(idPedido, etapa) {
    try {
      const response = await axios.patch(
        `${window.env.REACT_APP_API_URL}/pedidos/${idPedido}/reset-status-to`,
        { status: etapa },
      );
      return response.data;
    } catch (e) {
      throw new Error('Falha ao alterar status!');
    }
  }

  async regressaoStatus(status) {
    try {
      const response = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/regressaoStatus?status=${status}`);
      return response.data;
    } catch (e) {
      throw new Error('Falha ao carregar os status!');
    }
  }

  async updateDetalhesVeiculo(pedidoId, detalhesVeiculoDto) {
    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/detalhes-veiculo`,
        detalhesVeiculoDto,
      );
      return response.data;
    } catch (e) {
      if (e.response?.data && e.response?.status === 422) {
        return e.response.data;
      }

      throw e;
    }
  }

  async IntegracaoB2B(userEmail, pedidoId) {
    try {
      const response = await axios.post(`${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/integracao-b2b`, null, {
        headers: {
          'fidis-user-email': userEmail,
        },
      });
      return response.data;
    } catch (e) {
      const error = new Error('Falha ao tentar integração!');
      error.status = e?.response?.status;
      throw error;
    }
  }

  async getCodigoEmpresaRegional() {
    const response = await axios.get(`${window.env.REACT_APP_API_URL}/pedidos/codigo-empresa-regional`);

    if (!response.data || response.status !== 200) {
      throw new Error('Falha na busca dos códigos de empresa/regional!');
    }

    return response.data;
  }

  async sendDadosMontadora(pedidoId, detalhesPedidoDto, userEmail) {
    try {
      const response = await axios.post(
        `${window.env.REACT_APP_API_URL}/pedidos/${pedidoId}/dados-montadora`,
        detalhesPedidoDto,
        {
          headers: {
            'fidis-user-email': userEmail,
          },
        },
      );

      return response.data;
    } catch (e) {
      if (e.response?.data?.errors) {
        return e.response.data;
      }

      throw new Error('Falha ao salvar dados da montadora!');
    }
  }
}

export default new PedidosDetalheService();
