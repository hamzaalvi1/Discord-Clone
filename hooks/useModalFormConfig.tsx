import { InputField } from "@/components/Input";
import { ModalConfig } from "@/config/constants";
import type { ModalFormConfig } from "@/components/ModalForm/ModalForm";

interface ModalHookFromConfig extends ModalFormConfig {
  errors: any;
}

const ModalFormConfigHandler = (config: ModalHookFromConfig) => {
  let fieldComponent;

  switch (config.fieldType) {
    case ModalConfig.INPUT:
      fieldComponent = (
        <InputField
        name={config.name}
        type={config?.type}
        control={config.control}
        labelText={config.labelText}
        placeholder={config.placeholderText}
        error={config?.errors[config.name]?.message}
        />
      );

    default:
      fieldComponent = (
        <InputField
        name={config.name}
        type={config?.type}
        control={config.control}
        labelText={config.labelText}
        placeholder={config.placeholderText}
        error={config?.errors[config.name]?.message}
        />
      );
  }

  return fieldComponent;
};

export default ModalFormConfigHandler;
