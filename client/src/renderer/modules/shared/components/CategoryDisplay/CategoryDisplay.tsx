import { useQuery } from '@apollo/client';
import { Alert, CircularProgress } from '@mui/material';
import { CategoriesDocument } from 'renderer/graphql/generated';
import { CategoryDisplayType } from '../../lib/utils';
import CategoriesSlider from '../UI/CategoriesSlider/CategoriesSlider';

interface Props {
  displayType: string;
  selectedCat: any | null;
  onCatSelect: (cat: any) => void;
}
const CategoryDisplay: React.FC<Props> = ({
  displayType,
  selectedCat,
  onCatSelect,
}) => {
  const { loading, error, data } = useQuery(CategoriesDocument);
  return (
    <div className="my-6">
      {loading && <CircularProgress />}
      {!loading && error && <Alert severity="error">{error.message}</Alert>}
      {!loading && data && (
        <>
          {displayType === CategoryDisplayType.Slider && (
            <CategoriesSlider
              onCatChanged={onCatSelect}
              selectedCat={selectedCat}
              categories={data.categories}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CategoryDisplay;
