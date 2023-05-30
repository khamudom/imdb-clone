import React, { useRouter } from 'next/router';
import { DetailsPage } from '@/components';

const MovieDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  return (
    <div>
      <DetailsPage />
    </div>
  );
};

export default MovieDetailsPage;
