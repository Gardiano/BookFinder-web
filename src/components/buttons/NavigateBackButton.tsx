import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

interface ButtonProps {
  className: string
}

export const NavigateBackButton = (props: ButtonProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Button
      className={props.className}
      onClick={handleNavigate}
    >
      <ChevronLeft className="flex" />
    </Button>
  )
}