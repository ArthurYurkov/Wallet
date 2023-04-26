import { Body, Container, Head, Names, Table } from './Currency.styled';

export const Currency = () => {
  return (
    <>
      <Container>
        <Table>
          <Head>
            <Names>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </Names>
          </Head>
          <Body></Body>
        </Table>
      </Container>
    </>
  );
};
