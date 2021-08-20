export const ActionType = {
    MENU_TOGGLE: 'main/slider',
    CHANGE_WIDTH: 'main/services',
    SERVICE_MENU: 'serices/menu',
  };
  
export const menuToggle = (mode) => ({
    type: ActionType.MENU_TOGGLE,
    payload: mode
});

export const newWidth = (width) => ({
    type: ActionType.CHANGE_WIDTH,
    payload: width
});

export const selectedMenu = (selected) => ({
    type: ActionType.SERVICE_MENU,
    payload: selected
});
