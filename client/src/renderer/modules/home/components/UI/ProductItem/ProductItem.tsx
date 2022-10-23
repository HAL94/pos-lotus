import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

const ProductItem: React.FC<any> = ({ name, arName, description, image, sellingPrice, onItemClick }) => {
  return (
    <Item onClick={onItemClick} className='max-w-[200px]'>
      <Box flexDirection={"row"} sx={{ p: 2 }}>
        <img src={image} width={50} alt={name} className='block m-0 float-left' />
        <Box flexDirection="column" className='max-w-inherit'>
          <h1 className='text-md'>{name}</h1>
          <p className='text-sm truncate overflow-hidden'>{description}</p>
          <span className='text-lg'>SAR {sellingPrice}</span>
        </Box>
      </Box>
    </Item>
  )
};

export default ProductItem;
