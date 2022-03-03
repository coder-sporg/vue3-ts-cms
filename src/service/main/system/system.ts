import httpservice from '../../index'

import { IDataType } from '../../types'
import { IPageResult } from './type'

export function getPageListData(url: string, quaryInfo: any) {
  return httpservice.post<IDataType<IPageResult>>({
    url: url,
    data: quaryInfo
  })
}
