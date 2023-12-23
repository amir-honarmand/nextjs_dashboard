// 'use client'
import { enqueueSnackbar, VariantType } from "notistack";

// let useSnackbarRef;
// export const SnackbarUtilsConfigurator: React.FC = () => {
//   useSnackbarRef = useSnackbar();
//   return null;
// };

export const customSnackbar = {
  success(msg: string) {
    this.toast(msg, "success");
  },
  warning(msg: string) {
    this.toast(msg, "warning");
  },
  info(msg: string) {
    this.toast(msg, "info");
  },
  error(msg: string) {
    this.toast(msg, "error");
  },
  toast(msg: string, variant: VariantType = "default") {
    if (typeof window !== "undefined") {
      enqueueSnackbar(msg, { variant });
    }
  },
};
