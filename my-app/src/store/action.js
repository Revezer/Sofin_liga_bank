export const ActionType = {
    MENU_TOGGLE: `main/slide`,
    CHOICE_INFORMATION: 'main/info',
  };
  
export const menuToggle = (mode) => ({
    type: ActionType.MENU_TOGGLE,
    payload: mode
});

export const choiceInformation = (info) => ({
    type: ActionType.CHOICE_INFORMATION,
    payload: info
});
