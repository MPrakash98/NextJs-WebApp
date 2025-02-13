import { ToastProps } from "@/utils/types"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Notify = (message : string, type: string ) => {
    // console.log({message:message});
    
    switch (type) {
        case 'success':
          toast.success(message, toastOptions as any);
          break;
        case 'error':
          toast.error(message, toastOptions as any);
          break;
        case 'info':
          toast.info(message, toastOptions as any);
          break;
        default:
          toast.info(message, toastOptions as any);
      }
}

export default Notify;