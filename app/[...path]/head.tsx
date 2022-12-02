import React from 'react';

const DocHead = async ({ params: { path } }: { params: { path: string[] } }) => <title>{path.slice(-1)}</title>;

export default DocHead;
