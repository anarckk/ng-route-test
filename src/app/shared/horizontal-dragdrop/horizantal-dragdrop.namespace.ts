/**
 * Created by kkcra on 2019/4/11
 */
export namespace HorizontalDragDrop {
  export interface IDragConfig {
    txt: string,
    children?: IDropConfig
  }

  export interface IDropConfig {
    group?: string,
    isEnter?: boolean,
    dragList: IDragConfig[]
  }

  export function isInChild(dropConfig: IDropConfig) {
    if (dropConfig.isEnter) {
      return dropConfig.dragList.some(drag => drag.children && (drag.children.isEnter || isInChild(drag.children)));
    } else {
      return false;
    }
  }
}
