import { Button } from './Button';

export default {
  component: Button,
  title: 'Atoms/Esentials/Button',
  tags: ["autodocs"]
};

export const ButtonStart = {
  args: {
    label: "Empezar",
    to: "/firstForm",
    primary: true
  },
};

export const ButtonNextOne = {
  args: {
    label: "Siguiente",
    primary: true
  },
};
export const ButtonNextTwo = {
  args: {
    label: "Enviar",
    primary: false
  },
};
export const DirLeft = {
  args: {
    dir: false
  },
};
export const DirRight = {
  args: {
    dir: true
  },
};

