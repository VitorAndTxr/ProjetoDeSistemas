import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components'



const LoginPage = (): JSX.Element => {
    return(
        <Container>
            <StyledRow className="oi">
                <Col md={3}>
                    <Button>
                        teste
                    </Button>
                </Col>
            </StyledRow>
        </Container>
    )
}

export default LoginPage;

const StyledRow = styled(Row)`

    button{
        background-color: #000;
        i{

        }

    }

`





