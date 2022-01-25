type IFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'datepicker'
  | 'checkbox'
  | 'radio'

type IOptionType = {
  label: string | number
  value: string | number | boolean
}

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: IOptionType[]
  dateOption?: any
}

export interface IForm {
  formItems: IFormItem[]
  size?: string
  labelWidth?: string | number
  colLayout?: any
  formItemStyle?: any
}
