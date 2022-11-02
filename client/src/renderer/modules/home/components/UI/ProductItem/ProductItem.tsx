import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

const ProductItem: React.FC<any> = ({
  name,
  arName,
  description,
  image,
  sellingPrice,
  onItemClick,
}) => {
  // max-w-[200px] w-[200px]
  return (
    <Item onClick={onItemClick} className='max-w-[335px] max-h-[257px]'>
      <Box flexDirection={'row'} sx={{ p: 2 }}>
        <div className="flex flex-col justify-center items-center">
          <img
            src={image}
            width={50}
            alt={name}
            className="block m-0 float-left"
          />
        </div>
        <Box flexDirection="column" className="max-w-inherit">
          <h1 className="text-md my-1 text-black text-semibold truncate overflow-hidden">{name}</h1>
          <p className="text-xs truncate overflow-hidden text-[#8f8f8f]">{description}</p>
          <span className="text-lg">SAR {sellingPrice}</span>
        </Box>
      </Box>
    </Item>
  );
};

export default ProductItem;
