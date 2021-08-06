export const ActionType = {
    SLIDE_SELECTION: `main/slide`,
    CHOICE_INFORMATION: 'main/info',
    ADD_REVIEW: 'reviews/popup',
    OPEN_POPUP: 'reviews'
  };
  
export const slideSelection = (number) => ({
    type: ActionType.SLIDE_SELECTION,
    payload: number
});

export const choiceInformation = (info) => ({
    type: ActionType.CHOICE_INFORMATION,
    payload: info
});

export const addReview = (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review
});

export const openPopup = (action) => ({
    type: ActionType.OPEN_POPUP,
    payload: action
})


