import { clearEditContext } from "./editState";

const cancelTask = (function () {
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("dialog form");
  const cancelBtn = document.querySelector("#cancelBtn");

  const cancel = () => {
    clearEditContext();     // exit edit mode
    form.reset();           // clear inputs
    dialog.close();         // close modal
    console.log('here');
    
  };

  cancelBtn.addEventListener("click", cancel);

  // Optional: ESC key support
  dialog.addEventListener("cancel", (e) => {
    e.preventDefault(); // prevent default dialog close if needed
    cancel();
  });

  return { cancel };
})();

export { cancelTask };
