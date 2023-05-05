import {Prefix} from 'types/utils';
import {TOC_ITEMS} from './ActionInfoSommaire';

// type d'info associées à une action
export type TActionInfo = typeof TOC_ITEMS[number]['id'];
// noms des champs dans l'objet action
export type TFieldName = Prefix<'have_', TActionInfo>;
// et des rpc correspondantes dans la base
export type TRPCName = Prefix<'action_', TActionInfo>;

// item du sommaire
export type TTOCItem = {
  id: TActionInfo;
  label: string;
  num: number;
};
