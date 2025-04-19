import {useVirtualizer} from '@tanstack/react-virtual';
import {createLazyFileRoute} from '@tanstack/react-router';
import {useGetRequest} from '@hooks';
import {Loading, VirtualList} from '@components';
import {endpoints, PostResponse} from '@services/api';
import {DOM_IDS, TAN_STACK_QUERY_KEYS} from '@constants';

const page = 0;
const limit = 100;
const postMinHeight = 24;
const postsStaleTime = 4 * 60 * 1000; // 4 hours

export function DashboardPage() {
  // Example of a GET request
  const {data: posts, isLoading} = useGetRequest<PostResponse[]>(
    TAN_STACK_QUERY_KEYS.getPosts(page, limit),
    endpoints.getPosts({page, limit}),
    {
      staleTime: postsStaleTime,
    }
  );

  // Example of a POST request with vanilla api service
  // useEffect(() => {
  //   async function submitPost() {
  //     try {
  //       const ok = await makeRequest<PostResponse>(
  //         endpoints.submitPost({
  //           title: 'foo',
  //           body: 'bar',
  //           userId: 1,
  //         })
  //       );

  //       if (ok) {
  //         console.log('post submitted successfully');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   submitPost();
  // }, []);

  const virtualizer = useVirtualizer({
    count: limit,
    estimateSize: () => postMinHeight,
    getScrollElement: () => document.getElementById(DOM_IDS.MAIN_CONTAINER),
  });

  const items = virtualizer.getVirtualItems();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <VirtualList virtualizer={virtualizer} items={items}>
          {items?.map(virtualRow => (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}>
              {posts?.[virtualRow.index].title}
            </div>
          ))}
        </VirtualList>
      )}
    </>
  );
}

export const Route = createLazyFileRoute('/_auth/dashboard')({
  component: DashboardPage,
});
