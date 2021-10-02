/**
 *
 * ContactDetails
 *
 */

import React, { memo } from 'react';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function ContactDetails({contact}) {
  const currentContact=contact;
  return (
    <div>
      <h1>{currentContact.name}</h1>
      <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleId">id</Label>
              <Input
                type="text"
                name="id"
                id="exampleId"
                
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleIndex">index</Label>
              <Input
                type="text"
                name="index"
                id="exampleIndex"
                value={currentContact.index}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEyeColor">eyeColor</Label>
              <Input
                type="text"
                name="eyeColor"
                id="exampleEyeColor"
                value={currentContact.eyeColor}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleisActive">isActive</Label>
              <Input
                type="text"
                name="isActive"
                id="exampleisActive"
                value={currentContact.isActive}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleBalance">balance</Label>
              <Input
                type="text"
                name="balance"
                id="exampleBalance"
                value={currentContact.balance}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleAge">age</Label>
              <Input
                type="text"
                name="age"
                id="exampleAge"
                value={currentContact.age}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleGender">gender</Label>
              <Input
                type="text"
                name="gender"
                id="exampleGender"
                value={currentContact.gender}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="examplePhone">phone</Label>
              <Input
                type="text"
                name="phone"
                id="examplePhone"
                value={currentContact.phone}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleEmail">email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={currentContact.email}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleBirthday">birthday</Label>
              <Input
                type="text"
                name="city"
                id="exampleBirthday"
                value={currentContact.birthday}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="1234 Main St"
                value={currentContact.address}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <NavLink to="/ContactFriends/{currentContact._id}" exact>
        view friends
      </NavLink>
    </div>
  );
}

ContactDetails.propTypes = {
  contact: PropTypes,
};

export default memo(ContactDetails);
