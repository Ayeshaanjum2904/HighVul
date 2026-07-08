import * as XLSX from 'xlsx';

const normalizeHeader = (header) => {
  if (!header) return '';

  const normalized = header.toString().trim().toUpperCase();

  const corrections = {
    'PRAZO DE PAGAMENTO (MESES)': 'PRAZO',
    'VENCIMENTO PRIMEIRA PARCELA (DIAS)': 'CARENCIA',
    'TOTAL PARCELA': 'QTD_PARCELAS',
    'TAXA (% A.M.)': 'TAXA_MENSAL',
    COEFICIENTE: 'COEFICIENTE',
    'DATA INICIO': 'DATA_INICIO',
    'DATA FIM': 'DATA_FIM',

    'ESTADO (UF)': 'ESTADO',
    'VALOR DE REGISTRO (R$)': 'VALOR_REGISTRO',
  };

  return corrections[normalized] || normalized;
};

const convertValue = (value) => {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const numValue = Number(value);
  if (!Number.isNaN(numValue) && value.toString().trim() !== '') {
    return numValue;
  }

  return value.toString();
};

const formatExcelDate = (serial) => {
  const utcDays = Math.floor(serial - 25569);
  const utcValue = utcDays * 86400;
  const dateInfo = new Date(utcValue * 1000);

  const day = String(dateInfo.getUTCDate()).padStart(2, '0');
  const month = String(dateInfo.getUTCMonth() + 1).padStart(2, '0');
  const year = dateInfo.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

const processSheet = (worksheet, expectedFields) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: '',
    raw: true,
  });

  if (jsonData.length < 2) {
    throw new Error('Aba deve conter pelo menos uma linha de dados além do cabeçalho.');
  }

  const headers = jsonData[0];
  const rows = jsonData.slice(1);

  const normalizedHeaders = headers.map(normalizeHeader);

  const headerCounts = {};
  normalizedHeaders.forEach((header) => {
    if (header) {
      headerCounts[header] = (headerCounts[header] || 0) + 1;
    }
  });

  const duplicatedHeaders = Object.keys(headerCounts).filter(
    (header) => headerCounts[header] > 1,
  );

  if (duplicatedHeaders.length > 0) {
    throw new Error(`Colunas duplicadas encontradas: ${duplicatedHeaders.join(', ')}`);
  }

  const missingFields = expectedFields.filter(
    (field) => !normalizedHeaders.includes(field),
  );

  if (missingFields.length > 0) {
    throw new Error(`Campos obrigatórios não encontrados: ${missingFields.join(', ')}`);
  }

  const processedData = rows
    .map((row) => {
      const rowData = {};
      let hasData = false;

      headers.forEach((header, colIndex) => {
        const normalizedHeader = normalizeHeader(header);
        const cellValue = row[colIndex];

        if (normalizedHeader === 'DATA_INICIO' || normalizedHeader === 'DATA_FIM') {
          if (cellValue !== null && cellValue !== undefined && cellValue !== '') {
            const numValue = Number(cellValue);
            if (!Number.isNaN(numValue)) {
              rowData[normalizedHeader] = formatExcelDate(numValue);
            } else {
              rowData[normalizedHeader] = cellValue.toString();
            }
            hasData = true;
          }
        } else {
          const convertedValue = convertValue(cellValue);
          if (convertedValue !== null) {
            rowData[normalizedHeader] = convertedValue;
            hasData = true;
          }
        }
      });

      if (hasData) {
        const missingRowFields = expectedFields.filter(
          (field) => rowData[field] === null || rowData[field] === undefined,
        );

        if (missingRowFields.length > 0) {
          throw new Error(
            `Linha com campos obrigatórios em branco: ${missingRowFields.join(', ')}`,
          );
        }
      }

      return hasData ? rowData : null;
    })
    .filter((row) => row !== null);

  if (processedData.length === 0) {
    throw new Error('Nenhum dado válido encontrado na aba.');
  }

  return processedData;
};

const mapTaxasFinanciamento = (data) => data.map((item) => ({
  prazo: item.PRAZO,
  carencia: item.CARENCIA,
  qtdParcelas: item.QTD_PARCELAS,
  taxaMensal: item.TAXA_MENSAL,
  coeficiente: item.COEFICIENTE,
  dataInicio: item.DATA_INICIO,
  dataFim: item.DATA_FIM,
}));

const mapValoresRegistroEstado = (data) => data.map((item) => ({
  uf: item.ESTADO,
  valorRegistro: item.VALOR_REGISTRO,
  dataInicio: item.DATA_INICIO,
  dataFim: item.DATA_FIM,
}));

export const convertExcelToJson = (file) => new Promise((resolve) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const requiredSheets = ['Taxas de Financiamento', 'Valores de Registro por Estado'];
      const availableSheets = workbook.SheetNames;

      const missingSheets = requiredSheets.filter(
        (sheet) => !availableSheets.includes(sheet),
      );

      if (missingSheets.length > 0) {
        resolve({
          success: false,
          error: 'Arquivo inválido. Para corrigir, exporte o template de taxas vigentes e reenvie o arquivo. Nenhuma alteração foi salva.',
        });
        return;
      }

      const taxasSheet = workbook.Sheets['Taxas de Financiamento'];
      const taxasFields = [
        'PRAZO',
        'CARENCIA',
        'QTD_PARCELAS',
        'TAXA_MENSAL',
        'COEFICIENTE',
        'DATA_INICIO',
        'DATA_FIM',
      ];
      const taxasData = processSheet(taxasSheet, taxasFields);

      const valoresSheet = workbook.Sheets['Valores de Registro por Estado'];
      const valoresFields = ['ESTADO', 'VALOR_REGISTRO', 'DATA_INICIO', 'DATA_FIM'];
      const valoresData = processSheet(valoresSheet, valoresFields);

      resolve({
        success: true,
        data: {
          taxasFinanciamento: mapTaxasFinanciamento(taxasData),
          valoresRegistroEstado: mapValoresRegistroEstado(valoresData),
        },
      });
    } catch (error) {
      resolve({
        success: false,
        error: 'Arquivo inválido. Para corrigir, exporte o template de taxas vigentes e reenvie o arquivo. Nenhuma alteração foi salva.',
      });
    }
  };

  reader.onerror = () => {
    resolve({
      success: false,
      error: 'Arquivo inválido. Para corrigir, exporte o template de taxas vigentes e reenvie o arquivo. Nenhuma alteração foi salva.',
    });
  };

  reader.readAsArrayBuffer(file);
});
