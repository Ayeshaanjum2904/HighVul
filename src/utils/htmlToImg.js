import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

export const saveNodeAsPng = async (ref, name = 'image.png') => {
  if (ref.current) {
    const img = await toPng(ref.current);
    saveAs(img, name);
  }
};
