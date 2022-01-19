/* eslint-disable import/no-extraneous-dependencies */
import 'isomorphic-unfetch';
import nock from 'nock';
import '@testing-library/jest-dom/extend-expect';
import dotenv from 'dotenv';
import httpAdapter from 'axios/lib/adapters/http';
import axios from 'axios';

dotenv.config({ path: '.env.test' });

axios.defaults.adapter = httpAdapter;

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});