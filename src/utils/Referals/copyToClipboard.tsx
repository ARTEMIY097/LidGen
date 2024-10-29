import { toast } from "react-toastify";

const copyToClipboard = (text: string): void => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success(`Ссылка скопирована ${text}`);
    })
    .catch(() => {
      toast.error("Ошибка при копировании ссылки");
    });
};

export default copyToClipboard;
