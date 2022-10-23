import AppLogoIcon from 'renderer/assets/logo.png';
interface Props {
  width: number | string;
  height: number | string;
}
export const AppLogo: React.FC<Props> = ({ width, height }) => {
  return (
    <img src={AppLogoIcon} alt="Lotus" width={width} height={height} className="mx-auto" />
  );
};

export default AppLogo;
