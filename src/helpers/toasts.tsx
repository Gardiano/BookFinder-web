import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export const Toasts = () => {
  const { toast } = useToast();

  const error_Toast = (title: string, description: string) => {
    return toast({
      duration: 1500,
      variant: "destructive",
      title: title,
      description: description,
      action: (
        <ToastAction altText="Try again">
          FECHAR
        </ToastAction>
      ),
    })
  }

  const success_Toast = (title: string, description: string) => {
    return toast({
      duration: 1500,
      variant: "success",
      title: title,
      description: description,
      action: (
        <ToastAction altText="Try again">
          FECHAR
        </ToastAction>
      ),
    })
  }

  return { error_Toast, success_Toast };
}