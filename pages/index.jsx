import { Grid } from "@mantine/core";
import Layout from "../components/layout";

export default function Page() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
