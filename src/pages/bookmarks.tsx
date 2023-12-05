import Layout from "@/components/layout";
import Bookmarks from "@/features/bookmark/components/Bookmarks";

const BookmarksPage = () => {
  return (
    <Layout isLanding={false}>
      <Bookmarks />
    </Layout>
  );
};

export default BookmarksPage;
