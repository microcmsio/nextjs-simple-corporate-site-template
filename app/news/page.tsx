import { getNewsList } from '@/libs/microcms';
import { NEWS_LIST_LIMIT } from '@/constants';
import NewsList from '@/components/NewsList';
import Pagination from '@/components/Pagination';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <NewsList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/news" />
    </>
  );
}
