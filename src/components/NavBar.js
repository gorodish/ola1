import React from 'react';
import { Button, Container, Menu, MenuHeader } from 'semantic-ui-react';

export default function NavBar() {
	return (
		<Menu fixed='top' style={{ background: '#154073' }}>
			<Container>
				<MenuHeader style={{ paddingTop: '.3em', marginRight: '5em'}}>
					<img src='/assets/ola-logo.png' alt='logo' width='80px' />
				</MenuHeader>
				<Menu secondary>
					<Menu.Item>
						<Button.Group>
							<Button color='instagram' content='Profile' />
							<Button color='instagram' content='Chat' />
							<Button color='instagram' content='Search' />
						</Button.Group>
					</Menu.Item>
				</Menu>
				<Menu.Item position='right'>
					<Button color='teal' content='Login' />
					<Button
						color='green'
						content='Register'
						style={{ marginLeft: '.5em' }}
					/>
				</Menu.Item>
			</Container>
		</Menu>
	);
}
