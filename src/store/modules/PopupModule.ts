import {StorePopupAppDto} from "@/api/dto/store-popup-app.dto";

interface PopupModuleState {
  popupApp: StorePopupAppDto | null
}


export const PopupModule = {
  state: (): PopupModuleState => ({
    popupApp: {
      popupError: {
        show: false,
        message: null
      },
    }
  }),
  getters: {
    popupError(state: any) {
      return state.popupApp.popupError;
    }
  },
  mutations: {
    openErrorPopup(state: any, message: string) {
      const popupError = state.popupApp.popupError

      popupError.show = true;
      popupError.message = message;
    },
    closeErrorPopup(state: any) {
      const popupError = state.popupApp.popupError

      popupError.show = false;
      popupError.message = null;
    },
  },
  actions: {},
}
