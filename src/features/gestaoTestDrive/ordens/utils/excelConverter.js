import * as XLSX from 'xlsx';

const normalizeHeader = (header) => {
  if (!header) return '';

  const normalized = header.toString().trim().toUpperCase();

  const corrections = {
    ALESTIMENTO: 'ALLESTIMENTO',
    ALESTIMENTO_ESPECIAL: 'ALLESTIMENTO_ESPECIAL',
  };

  return corrections[normalized] || normalized;
};

const STRING_FIELDS = ['ALLESTIMENTO'];

const convertValue = (value, header) => {
  if (value === null || value === undefined) return null;

  const strValue = value.toString().trim();
  if (strValue === '') return null;

  if (STRING_FIELDS.includes(header)) {
    return strValue;
  }

  const numValue = Number(strValue);
  if (!Number.isNaN(numValue)) {
    return numValue;
  }

  return strValue;
};

export const convertExcelToJson = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: '',
      });

      if (jsonData.length < 2) {
        reject(new Error('Arquivo Excel deve conter pelo menos uma linha de dados além do cabeçalho'));
        return;
      }

      const headers = jsonData[0];
      const rows = jsonData.slice(1);

      const excelList = rows.map((row) => {
        const rowData = {};

        headers.forEach((header, colIndex) => {
          const normalizedHeader = normalizeHeader(header);
          const convertedValue = convertValue(row[colIndex], normalizedHeader);

          if (convertedValue !== null) {
            rowData[normalizedHeader] = convertedValue;
          }
        });

        return Object.keys(rowData).length > 0 ? rowData : null;
      }).filter((row) => row !== null);

      if (excelList.length === 0) {
        reject(new Error('Nenhum dado válido encontrado no arquivo'));
        return;
      }

      resolve(excelList);
    } catch (error) {
      reject(new Error(`Erro ao processar arquivo Excel: ${error.message}`));
    }
  };

  reader.onerror = () => {
    reject(new Error('Erro ao ler o arquivo'));
  };

  reader.readAsArrayBuffer(file);
});
