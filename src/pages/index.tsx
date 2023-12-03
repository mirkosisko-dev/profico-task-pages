import Layout from "@/components/layout";
import Landing from "@/features/landing";

export default function Home() {
  return (
    <Layout isLanding={true}>
      <Landing />
    </Layout>
  );
}
