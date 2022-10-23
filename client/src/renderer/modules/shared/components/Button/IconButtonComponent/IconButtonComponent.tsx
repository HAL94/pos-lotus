import { IconButton } from '@mui/material';

interface IconButtonProps {
  onClick: (args?: any) => void | JSX.Element;
  IconComponent: any;
  iconProps: { src?: string; size?: number };
  buttonText: string;
}

const IconButtonComponent: React.FC<IconButtonProps> = ({
  onClick,
  IconComponent,
  iconProps = {},
  buttonText = '',
}: IconButtonProps) => {
  return (
    <IconButton aria-label="Profile Button" onClick={onClick}>
      <span>{buttonText}</span>
      <IconComponent {...iconProps} />
    </IconButton>
  );
};

export default IconButtonComponent;
