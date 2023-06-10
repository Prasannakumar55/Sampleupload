import React from 'react';
import { Button } from 'frappe-ui';

function Errors() {
  return (
    <div>
      <Button onClick={() => alert('Hello')}>Default</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="danger">Danger</Button>
      <Button appearance="minimal">Minimal</Button>
      <Button icon="x" />
      <Button iconLeft="menu">Menu</Button>
      <Button iconRight="external-link">Link</Button>
      <Button loading={true}>Submit</Button>
    </div>
  );
}

export default Errors;
