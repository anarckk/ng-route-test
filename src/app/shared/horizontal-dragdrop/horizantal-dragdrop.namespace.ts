/**
 * Created by kkcra on 2019/4/11
 */
export namespace HorizontalDragDrop {
  export interface IData {
    group?: string,
    list: {
      txt: string,
      children?: IData
    }[]
  }
}
