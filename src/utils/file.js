const MEGABYTE_CONVERSOR = 1048576.0;

export const convertBytesToMb = (bytes) => Math.round((bytes / MEGABYTE_CONVERSOR) * 1000) / 1000;
