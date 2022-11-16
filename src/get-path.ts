const getPath = ({ pathParts, uri }: { pathParts: string[]; uri: string }) => {
  if (uri.charAt(0) === '#') return uri;

  try {
    return new URL(uri).toString();
  } catch (e) {
    const isAbsolute = uri.charAt(0) === '/';
    const path = `${pathParts.slice(0, isAbsolute ? 3 : -1).join('/')}${isAbsolute ? '' : '/'}${uri}`;
    return /\.md$/.test(path) ? `/${path}` : `https://raw.githubusercontent.com/${path}`;
  }
};

export default getPath;
