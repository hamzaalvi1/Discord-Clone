import { InputField } from "@/components/Input";
import { ModalConfig } from "@/config/constants";
import type { ModalFormConfig } from "@/components/ModalForm/ModalForm";

const ModalFormConfigHandler = (config: ModalFormConfig) => {
  let fieldComponent;

  switch (config.fieldType) {
    case ModalConfig.INPUT:
      fieldComponent = (
        <InputField
          name={config.name}
          type={config?.type}
          control={config.control}
          placeholder={config.placeholderText}
          labelText={config.labelText}
        />
      );

    default:
      fieldComponent = (
        <InputField
          name={config.name}
          type={config?.type}
          control={config.control}
          placeholder={config.placeholderText}
          labelText={config.labelText}
        />
      );
  }

  return fieldComponent;
};

export default ModalFormConfigHandler;
