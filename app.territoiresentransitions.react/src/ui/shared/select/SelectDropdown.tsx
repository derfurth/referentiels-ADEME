import classNames from 'classnames';
import {forwardRef, Ref} from 'react';

import DropdownFloater from 'ui/shared/floating-ui/DropdownFloater';
import {
  buttonDisplayedClassname,
  buttonDisplayedPlaceholderClassname,
  optionButtonClassname,
  Checkmark,
  ExpandCollapseIcon,
  TSelectBase,
  TSelectSelectionButtonBase,
  TOption,
} from 'ui/shared/select/commons';

type TSelectDropdownBaseProps<T extends string> = TSelectBase & {
  /** valeurs des options sélectionnées */
  value?: T;
  /** Expose la valeur sélectionnée afin d'afficher un composant custom pour le bouton d'ouverture du menu*/
  renderSelection?: (value: T) => React.ReactElement;
};

type TSelectButtonProps<T extends string> = TSelectDropdownBaseProps<T> &
  TSelectSelectionButtonBase;

export type TSelectDropdownProps<T extends string> =
  TSelectDropdownBaseProps<T> & {
    /** fait le rendu d'une option de la liste (optionnel) */
    renderOption?: (option: TOption) => React.ReactElement;
    /** appelée quand l'option sélectionnée change (reçoit la nouvelle valeur) */
    onSelect: (value: T) => void;
  };

const SelectDropdown = <T extends string>({
  value,
  options,
  onSelect,
  buttonClassName,
  renderSelection,
  renderOption,
  placeholderText,
  placement,
  disabled,
  'data-test': dataTest,
}: TSelectDropdownProps<T>) => {
  return (
    <DropdownFloater
      placement={placement}
      render={({close}) => (
        <div data-test={`${dataTest}-options`}>
          {options.map(option => {
            return (
              <button
                key={option.value}
                data-test={option.value}
                className={optionButtonClassname}
                onClick={() => {
                  onSelect(option.value as T);
                  close();
                }}
              >
                <Checkmark isSelected={value === option.value} />
                {renderOption ? (
                  renderOption(option)
                ) : (
                  <span>{option.label}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    >
      <SelectButtton
        data-test={dataTest}
        value={value}
        options={options}
        renderSelection={
          renderSelection ? value => renderSelection(value as T) : undefined
        }
        buttonClassName={buttonClassName}
        placeholderText={placeholderText}
        disabled={disabled}
      />
    </DropdownFloater>
  );
};

export default SelectDropdown;

/* Création d'un composant séparé pour passer la ref du boutton au floater */
const SelectButtton = forwardRef(
  <T extends string>(
    {
      isOpen,
      value,
      options,
      buttonClassName,
      placeholderText,
      renderSelection,
      disabled,
      'data-test': dataTest,
      ...props
    }: TSelectButtonProps<T>,
    ref?: Ref<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      data-test={dataTest}
      aria-expanded={isOpen}
      aria-label="ouvrir le menu"
      className={classNames(buttonDisplayedClassname, buttonClassName)}
      disabled={disabled}
      {...props}
    >
      {value ? (
        renderSelection ? (
          renderSelection(value)
        ) : (
          <span className="mr-auto flex line-clamp-1">
            {options.find(({value: v}) => v === value)?.label || ''}
          </span>
        )
      ) : (
        <span className={buttonDisplayedPlaceholderClassname}>
          {placeholderText ?? ''}
        </span>
      )}
      <ExpandCollapseIcon isOpen={isOpen} />
    </button>
  )
);
