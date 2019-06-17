import { h } from 'hyperapp';

export const Icon = ({ name, type = 's' }) => (
  <i className={`fa${type} fa-${name} fa-fw`} />
);
