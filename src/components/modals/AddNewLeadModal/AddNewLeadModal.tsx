import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import { INewLeadDto } from "../../../services/leads/leads.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import ListSelect, { ListSelectOption } from "../../ui/ListSelect/ListSelect";

const partners: ListSelectOption[] = [
  { id: 0, name: "Partner 1" },
  { id: 1, name: "Partner 2" },
  { id: 2, name: "Partner 3" },
];

const sources: ListSelectOption[] = [
  { id: 0, name: "Referal link" },
  { id: 1, name: "Direct addition" },
];

const AddNewLeadModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPartner, setSelectedPartner] =
    useState<ListSelectOption | null>(null);

  const [selectedSource, setSelectedSource] = useState<ListSelectOption | null>(
    null
  );

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<INewLeadDto>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<INewLeadDto> = (data) => {
    console.log(data);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-primary btn-outline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
          />
        </svg>
        Добавить лида
      </button>
      <Dialog
        transition
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 backdrop-blur-lg" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel
            transition
            className="modal-box max-w-96 flex flex-col items-center space-y-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <DialogTitle className="font-bold text-2xl">
              Добавить нового лида
            </DialogTitle>
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Идентификатор</span>
                </div>
                <input
                  {...formRegister("id", {
                    required: "id is required",
                  })}
                  id="id"
                  type="text"
                  className={`input input-bordered ${
                    errors.id && "input-error"
                  } w-full`}
                  placeholder=""
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Партнёры</span>
                </div>
                <ListSelect
                  options={partners}
                  selected={selectedPartner}
                  setSelected={setSelectedPartner}
                />
                {/* <input
                  {...formRegister("partners", {
                    required: "partners is required",
                  })}
                  id="partners"
                  type="text"
                  className={`input input-bordered ${
                    errors.partners && "input-error"
                  } w-full`}
                  placeholder=""
                /> */}
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Источник</span>
                </div>
                <ListSelect
                  options={sources}
                  selected={selectedSource}
                  setSelected={setSelectedSource}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Дата создания</span>
                </div>
                <input
                  {...formRegister("creationDate", {
                    required: "creationDate is required",
                  })}
                  id="creationDate"
                  type="text"
                  className={`input input-bordered ${
                    errors.creationDate && "input-error"
                  } w-full`}
                  placeholder=""
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Комментарий</span>
                </div>
                <textarea
                  {...formRegister("comment", {
                    required: "comment is required",
                  })}
                  id="comment"
                  className={`textarea textarea-bordered ${
                    errors.comment && "textarea-error"
                  } w-full`}
                  placeholder=""
                />
              </label>
              <button className="btn btn-primary">Добавить</button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default AddNewLeadModal;
