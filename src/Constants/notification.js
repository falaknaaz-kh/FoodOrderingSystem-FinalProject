import { toast, Zoom } from "react-toastify";

export const success = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
    transition: Zoom,
  });
};
export const danger = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
    transition: Zoom,
  });
};
export const info = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
    transition: Zoom,
  });
};

export const error = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
    transition: Zoom,
  });
};

export const welcomeMessage = (name, role) => {
  toast.success("Hello " + name + ", Welcome to CraveClick....", {
    position: toast.POSITION.TOP_CENTER,
    theme: "colored",
    transition: Zoom,
  });
};
