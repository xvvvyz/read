const getPath = ({ path, uri }: { path: string[]; uri: string }) => {
  if (uri.charAt(0) === '#') return uri;

  try {
    return new URL(uri).toString();
  } catch (e) {
    const isAbsolute = uri.charAt(0) === '/';
    const p = `${path.slice(0, isAbsolute ? 3 : -1).join('/')}${isAbsolute ? '' : '/'}${uri}`;
    return /\.md$/.test(p) ? `/${p}` : `https://raw.githubusercontent.com/${p}`;
  }
};

export default getPath;
