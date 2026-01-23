let editContext = null;

const setEditContext = (project, index) => {
  editContext = { project, index };
};

const getEditContext = () => editContext;

const clearEditContext = () => {
  editContext = null;
};

export { setEditContext, getEditContext, clearEditContext };
