export const ActionType = {
    MENU_TOGGLE: 'main/slider',
    CHANGE_WIDTH: 'main/services',
    SERVICE_MENU: 'serices/menu',
    SWITCH_LOGIN: 'main/header'
  };
  
export const menuToggle = (mode) => ({
    type: ActionType.MENU_TOGGLE,
    payload: mode
});

export const setNewWidth = (width) => ({
    type: ActionType.CHANGE_WIDTH,
    payload: width
});

export const selectedMenu = (selected) => ({
    type: ActionType.SERVICE_MENU,
    payload: selected
});

export const setSwitchLogin = (bool) => ({
    type: ActionType.SWITCH_LOGIN,
    payload: bool
});
