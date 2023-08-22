import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modelo from "../templates/Modelo";

export default function CadastroVendedor() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modelo>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>OK!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Sobrenome"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>E-mail</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="E-mail"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor insira seu e-mail.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira o nome da cidade.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Estado" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira o estado.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="CEP" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira um número de CEP válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="CPF" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira um numero válido para CPF.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>Loja</Form.Label>
            <Form.Control type="text" placeholder="Loja" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira o nome da sua loja.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom08">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="text" placeholder="Senha" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira um número de Senha válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Eu concordo com as condições"
            feedback="Você deve concordar com as condições para seguir."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="m-2" type="submit">
          Cadastrar
        </Button>
        <Button className="m-2" type="delete">
          Deletar
        </Button>
        <Button className="m-2" type="editar">
          Editar
        </Button>
      </Form>
    </Modelo>
  );
}
