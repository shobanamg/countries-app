import borders from '../assets/borders.json';

const getBorder = (key: string) => {
  const keyTyped = key as keyof typeof borders;
  return borders[keyTyped];
};

export default getBorder;
