import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import NavBar from './components/NavBar';

export default function App() {

  return (
		<React.Fragment>
			<NavBar />
			<Grid container style={{ margin: '1em 0' }}>
				<Grid.Column width={4}>
					<Segment>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</Segment>
				</Grid.Column>
				<Grid.Column padded width={8}>
					<Segment raised>
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
						aliquid ex ea commodi consequatur? Quis autem vel eum iure
						reprehenderit qui in ea voluptate velit esse quam nihil molestiae
						consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?"
					</Segment>
				</Grid.Column>
				<Grid.Column width={4}>
					<Segment>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum."
					</Segment>
				</Grid.Column>
			</Grid>
      <Segment inverted vertical>
      <Container>
        <Grid divided inverted stackable padded>
          <Grid.Row>
            <Grid.Column width={5} style={{ paddingLeft: '3em' }}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>Policies</List.Item>
                <List.Item as='a'>Help</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5} style={{ paddingLeft: '3em' }}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Order merch</List.Item>
                <List.Item as='a'>FAQs</List.Item>
                <List.Item as='a'>Modern slavery</List.Item>
                <List.Item as='a'>Unusual requests</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6} style={{ paddingLeft: '3em' }}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for stuff to promote.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
    </Segment>
		</React.Fragment>
	);
}
