import Layout from "@/components/layout";
import Bookmarks from "@/features/bookmark/components/Bookmarks";

const bookmarks = () => {
  return (
    <Layout isLanding={false}>
      <Bookmarks />
    </Layout>
  );
};

export default bookmarks;
