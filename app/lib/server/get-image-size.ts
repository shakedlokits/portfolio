import probe from 'probe-image-size';

export const getImageSize = async (url: string): Promise<{ width: number; height: number }> => {
  const { width, height } = await probe(url);

  return { width, height };
};